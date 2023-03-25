import "cypress-localstorage-commands";
import data from "../../submissionData.json";
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];
import { initial, pagination, stocks } from "../fixtures/data.json";

// let baseServerURL = Cypress.env("serverUrl");

data.map(({ submission_link: url, id }) => {
  describe("Test", () => {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    afterEach(() => {
      cy.saveLocalStorage();
    });

    it("When user is not signed in redired to signin page", () => {
      cy.visit(url);
      cy.url().then((curr_url) => {
        console.log(curr_url);
        expect(curr_url).to.eq(`${url}/signin.html`);
      });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it(`Visit the signup page and signup`, () => {
      cy.intercept(`**/register`).as("apiRequest");
      cy.visit(`${url}/signup.html`);
      cy.get("#name").clear().type("s");
      cy.get("#email").clear().type("s@gmail.com");
      cy.get("#password").clear().type(1234);
      cy.get("form")
        .submit()
        .then(() => {
          cy.wait("@apiRequest");
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); // 2

    it(`Visit the signin page and signin`, () => {
      cy.intercept(`**/login`).as("apiRequest");
      expect(localStorage.getItem("auth")).to.eq(null);
      cy.visit(`${url}/signin.html`);
      cy.get("#email").clear().type("s@gmail.com");
      cy.get("#password").clear().type(1234);
      cy.get("form")
        .submit()
        .then(() => {
          cy.wait("@apiRequest");
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it("Visit the Home page and check api request", () => {
      cy.intercept(`**/stocks`, (req) => {
        req.reply({
          body: stocks,
        });
      }).as("getdata");
      cy.visit(`${url}/`);
      cy.wait("@getdata");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check the DOM after the api request", () => {
      initial.forEach((el, i) => {
        cy.get("tbody tr").eq(i).contains("td", el.name);
        cy.get("tbody tr").eq(i).contains("td", el.category);
        cy.get("tbody tr").eq(i).contains("td", el.sector);
        cy.get("tbody tr").eq(i).contains("td", el.price);
        cy.get("tbody tr").eq(i).contains("td", el.quantity);
        cy.get("tbody tr").eq(i).contains("td", el.addDate);
        cy.get("tbody tr")
          .eq(i)
          .contains("td", el.price * el.quantity);
      });

      cy.then(() => (acc_score += 2));
    }); // 2

    it("Check the pagination buttons", () => {
      cy.get("#pagination").children("button").should("have.length", 10);
      cy.get("#pagination > button").eq(1).click();
      pagination.forEach((el, i) => {
        cy.get("tbody tr").eq(i).contains("td", el.name);
        cy.get("tbody tr").eq(i).contains("td", el.category);
        cy.get("tbody tr").eq(i).contains("td", el.sector);
        cy.get("tbody tr").eq(i).contains("td", el.price);
        cy.get("tbody tr").eq(i).contains("td", el.quantity);
        cy.get("tbody tr").eq(i).contains("td", el.addDate);
        cy.get("tbody tr")
          .eq(i)
          .contains("td", el.price * el.quantity);
      });

      cy.then(() => (acc_score += 2));
    }); // 2

    it("Check the Filtering", () => {
      cy.get("#filter").select("Mid Cap");
      cy.get("tbody tr").eq(0).contains("td", "Mid Cap");
      cy.get("tbody tr").eq(4).not("td", "Mid Cap");
      cy.get("#filter").select("Large Cap");
      cy.get("tbody tr").eq(0).contains("td", "Large Cap");
      cy.get("tbody tr").eq(4).not("td", "Large Cap");
      cy.then(() => (acc_score += 2));
    }); // 2

    it("Sell is Working Fine", () => {
      cy.intercept(`**/stocks/TEOQP90QRV`).as("apiRequest");
      cy.intercept(`**/stocks`, (req) => {
        req.reply({
          body: stocks,
        });
      }).as("getdata");
      cy.visit(url);
      cy.wait("@getdata");
      cy.get("tbody tr").eq(0).contains("td", "Sell").click();
      cy.wait("@apiRequest");
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Creating New Stock is also working fine", () => {
      cy.intercept(`**/stocks`).as("apiRequest");
      cy.visit(`${url}/newStock.html`);
      cy.get("#name").clear().type("s1");
      cy.get("#category").select("Large Cap");
      cy.get("#sector").clear().type("oil");
      cy.get("#price").clear().type(2);
      cy.get("#quantity").clear().type(1);
      cy.get("#addDate").type("2009-12-12");
      cy.get("form").submit();
      cy.wait("@apiRequest");
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});

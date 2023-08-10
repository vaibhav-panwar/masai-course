import data from "../../submissionData.json"; // do not create this file
//const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];

// import { FaStar } from "react-icons/fa";
// import { FaTrash } from "react-icons/fa";
let initaldata = [
  {
    id: 1,
    title: "Very Poor",
    color: "red",
    rating: 1,
  },
  {
    id: 2,
    title: "Poor",
    color: "yellow",
    rating: 2,
  },
  {
    id: 3,
    title: "good",
    color: "orange",
    rating: 3,
  },
  {
    id: 4,
    title: "Very Good",
    color: "lightgreen",
    rating: 4,
  },
  {
    id: 5,
    title: "Excellent",
    color: "green",
    rating: 5,
  },
];

let headingscolor = {
  1: "red",
  2: "yellow",
  3: "orange",
  4: "lightgreen",
  5: "green",
};

describe("React rating", () => {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    beforeEach(() => {
      cy.visit(url);
      cy.window().should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`User should be able to login with correct username and password`, () => {
      cy.visit(url);
      cy.get('input[name="username"]').should("be.visible");
      cy.get('input[name="password"]').should("be.visible");
      cy.get('input[name="username"]').type("admin");
      cy.get('input[name="password"]').type("1234");
      cy.get('input[type="submit"]').click({ force: true });
      cy.get("p")
        .eq(0)
        .should("be.visible")
        .should("have.text", "Welcome admin");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`User should not be able to login with wrong credentials and need to get error message`, () => {
      cy.visit(url);
      cy.get('input[name="username"]').should("be.visible");
      cy.get('input[name="password"]').should("be.visible");
      cy.get('input[name="username"]').type("admin123");
      cy.get('input[name="password"]').type("1234");
      cy.get("h1").should("not.exist");
      cy.get('input[type="submit"]').click({ force: true });
      cy.get("h1")
        .eq(0)
        .should("be.visible")
        .should("contain", "Some thing went wrong");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`onclicking on logout the user should see only login component`, () => {
      cy.visit(url);
      cy.get('input[name="username"]').should("be.visible");
      cy.get('input[name="password"]').should("be.visible");
      cy.get('input[name="username"]').type("admin");
      cy.get('input[name="password"]').type("1234");
      cy.get('input[type="submit"]').click({ force: true });
      cy.get("p")
        .eq(0)
        .should("be.visible")
        .should("have.text", "Welcome admin");
      cy.get("button").eq(0).should("be.visible").click({ force: true });
      cy.get('input[name="username"]').should("be.visible");
      cy.get('input[name="password"]').should("be.visible");
      cy.get("p").should("not.exist");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Check initial rating and color of active starts is yellow is as per the data in data.json`, () => {
      cy.visit(url);
      cy.get('input[name="username"]').type("admin");
      cy.get('input[name="password"]').type("1234");
      cy.get('input[type="submit"]').click({ force: true });
      for (let i = 0; i < 5; i++) {
        cy.get(".ratingcard>h1").eq(i).should("contain", initaldata[i].title);
        cy.get(".ratingcard>p")
          .eq(i)
          .should("contain", `${initaldata[i].rating} of 5`);        
        cy.get(".ratingcard>h1").eq(i).should('have.attr','style',`color: ${headingscolor[initaldata[i].rating]};`)
        //checking color of stars
        for (let j = 0; j < initaldata[i].rating; j++) {
          let row = i * 5;
          cy.get(`.ratingcard>[data-icon="star"]`)
            .eq(row + j)
            .should("have.css", "color", "rgb(255, 255, 0)");
        }        
      }
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Trash icon should be working correctly and DOM is updating in realtime`, () => {
      cy.visit(url);
      cy.get('input[name="username"]').type("admin");
      cy.get('input[name="password"]').type("1234");
      cy.get('input[type="submit"]').click({ force: true });
      //check 2
      //cy.get(FaTrash).should("exist");
      cy.get(`[data-icon="trash"]`).eq(0).click();

      for (let i = 1; i < 5; i++) {
        cy.get(".ratingcard>h1")
          .eq(i - 1)
          .should("contain", initaldata[i].title);
        cy.get(".ratingcard>p")
          .eq(i - 1)
          .should("contain", `${initaldata[i].rating} of 5`);
      }

      cy.get(`[data-icon="trash"]`).eq(3).click();

      for (let i = 1; i < 4; i++) {
        cy.get(".ratingcard>h1")
          .eq(i - 1)
          .should("contain", initaldata[i].title);
        cy.get(".ratingcard>p")
          .eq(i - 1)
          .should("contain", `${initaldata[i].rating} of 5`);
      }

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`when we are clicking on the star check whether rating is getting changed and appropriate comments(title) can be seen or not and title is in respective color`, () => {
      cy.visit(url);
      cy.get('input[name="username"]').type("admin");
      cy.get('input[name="password"]').type("1234");
      cy.get('input[type="submit"]').click({ force: true });
      for (let row = 0; row < 5; row++) {
        for (let i = 0; i < 5; i++) {
          cy.get(`.ratingcard>[data-icon="star"]`)
            .eq(row * 5 + i)
            .click({ force: true });
          cy.get(".ratingcard>h1")
            .eq(row)
            .should("contain", initaldata[i].title);          
          for (let j = 0; j <= i; j++) {
            cy.get(`[data-icon="star"]`)
              .eq(row * 5 + j)
              .should("have.css", "color", "rgb(255, 255, 0)");
          }
          for (let j = i + 1; j < 4; j++) {
            cy.get(`[data-icon="star"]`)
              .eq(row * 5 + j)
              .should("have.css", "color", "rgb(128, 128, 128)");
          }
          cy.get(".ratingcard>p")
            .eq(row)
            .should("contain", `${initaldata[i].rating} of 5`);
          
        }
      }

      cy.then(() => {
        acc_score += 4;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
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

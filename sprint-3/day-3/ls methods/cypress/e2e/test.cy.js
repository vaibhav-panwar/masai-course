import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });
      it(`Able to store Name on Button Click`, () => {
        cy.visit(url);
        cy.window().then((win) => {
          expect(localStorage.getItem("username")).to.eq(null);
        });
        cy.get("#store-name")
          .click()
          .then(() => {
            expect(localStorage.getItem("username")).to.eq("Masai School");
            acc_score += 1;
          });
      }); // 1
      it(`Able to show the LS data on Click`, () => {
        cy.get("#get-name").click();
        cy.get("#show-name")
          .should("have.text", "Masai School")
          .then(() => {
            acc_score += 1;
          });
      }); // 1

      it(`Able to store Mob on Button Click`, () => {
        cy.window().then((win) => {
          expect(localStorage.getItem("mobile")).to.eq(null);
        });
        cy.get("#store-mob")
          .click()
          .then(() => {
            expect(localStorage.getItem("mobile")).to.not.eq(null);
            acc_score += 1;
          });
      }); // 1
      it(`Able to show the LS data on Click`, () => {
        cy.get("#get-mob").click();
        cy.get("#show-mob")
          .should("have.text", localStorage.getItem("mobile"))
          .then(() => {
            acc_score += 1;
          });
      }); // 1

      it(`Able to store Hobbies on Button Click`, () => {
        cy.window().then((win) => {
          expect(localStorage.getItem("my_hobbies")).to.eq(null);
        });
        cy.get("#store-hobbies")
          .click()
          .then(() => {
            expect(localStorage.getItem("my_hobbies")).to.not.eq(null);
            acc_score += 1;
          });
      }); // 1
      it(`Able to show the LS data on Click`, () => {
        cy.get("#get-hobbies").click();
        cy.get("#show-hobbies")
          .should(
            "have.text",
            JSON.parse(localStorage.getItem("my_hobbies")).join("/")
          )
          .then(() => {
            acc_score += 1;
          });
      }); // 1

      it(`Able to store Students on Button Click`, () => {
        cy.window().then((win) => {
          expect(localStorage.getItem("students")).to.eq(null);
        });
        cy.get("#store-students")
          .click()
          .then(() => {
            expect(localStorage.getItem("students")).to.not.eq(null);
            acc_score += 1;
          });
      }); // 1
      it(`Able to show the LS data on Click`, () => {
        cy.get("#get-students").click();
        cy.get("#show-students")
          .should(
            "have.text",
            JSON.parse(localStorage.getItem("students"))
              .map((el) => el.name)
              .join("/")
          )
          .then(() => {
            acc_score += 1;
          });
      }); // 1
    }

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

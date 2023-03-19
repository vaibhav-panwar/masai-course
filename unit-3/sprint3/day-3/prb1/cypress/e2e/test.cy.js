// import fetch from 'isomorphic-fetch';
import data from "../../submissionData.json";
import "cypress-localstorage-commands";
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];

import coffeeData from "../fixtures/coffee.json";
let numOfCoffees = coffeeData.coffee.length;
data.map(({ submission_link: url, id }) => {
  describe("Test", () => {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it(`present navbar with h1 tag`, () => {
      cy.visit(url);
      cy.get(".Navbar").should("exist").should("contain.html", "h1");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`able to make get request and fetch coffee data`, () => {
      cy.visit(url);
      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards).first().should("contain", coffeeData.coffee[0].title);

      cy.get(cards)
        .eq(Math.ceil(numOfCoffees / 2))
        .should(
          "contain",
          coffeeData.coffee[Math.ceil(numOfCoffees / 2)].title
        );

      cy.get(cards)
        .last()
        .should("contain", coffeeData.coffee[numOfCoffees - 1].title);

      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`coffee card  with h2 title`, () => {
      cy.visit(url);
      cy.get(".data-list-wrapper")
        .children()
        .should("exist")
        .should("contain.html", "h2");
      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`coffee card with li tag for ingredients`, () => {
      cy.visit(url);
      cy.get(".data-list-wrapper")
        .children()
        .children()
        .should("exist")
        .should("contain.html", "li");
      cy.then(() => {
        acc_score += 2;
      });
    });

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

import data from "../../submissionData.json"; // do not create this file
import { movies } from "../fixtures/data.json";
data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  if (url[url.length - 1] !== "/") {
    url = url + "/";
  }
  describe("React Routing Movie Rating Testing", function () {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // prevent the error from failing the test
        return false;
      });
    });
    it("Checking the api request on component mount", () => {
      cy.intercept("**/movies", movies).as("apiRequest");
      cy.visit(url);
      cy.wait("@apiRequest");
      cy.then(() => (acc_score += 1));
    }); //1
    it("Able to show the api data on the dom", () => {
      movies
        .slice(0, 10)
        .forEach(({ name, actor, language, averageReview }, index) => {
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(name);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(actor);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(language);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(averageReview);
        });
      cy.then(() => (acc_score += 2));
    }); //2
    it("Check the Genere part of the Cards", () => {
      movies.slice(0, 10).forEach(({ genere }, index) => {
        cy.get(
          `div[data-test-id="movie-card"]:nth-child(${
            index + 1
          }) div[data-test-id="genere-chips"]`
        ).should("have.length", genere.length);
      });

      cy.then(() => (acc_score += 1));
    }); //1
    it("Checking if clicking on Rate button redirects on the appropriate page", () => {
      cy.get(
        `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${1}) button`
      ).click();
      cy.url().should("include", "rate/1");
      cy.then(() => (acc_score += 1));
    }); // 1

    it("Check rating a movie is working or not", () => {
      cy.intercept("PUT", `**/movies/3`).as("rateApiReq");
      cy.intercept("**/movies/**").as("getApiReq");
      cy.intercept("**/movies").as("initialApiReq");
      cy.visit(url + "rate/3");
      cy.wait("@getApiReq");
      cy.get(`select[data-test-id="rate-select"]`).select("4");
      cy.get(`button[data-test-id="rate-confirm"]`)
        .click()
        .then(() => {
          cy.wait("@rateApiReq");
        });
      cy.then(() => (acc_score += 2));
    }); //2

    it("Check if Pagination Buttons are Present or not", () => {
      cy.intercept("**/movies", movies.slice(0, 40)).as("apiRequest");
      cy.visit(url);
      cy.wait("@apiRequest");
      cy.get(
        `div[data-test-id="pagination-contsiner"] button[data-test-id="prev-pagination"]`
      ).should("have.length", 1);
      cy.get(
        `div[data-test-id="pagination-contsiner"] button[data-test-id="next-pagination"]`
      ).should("have.length", 1);
      cy.get(
        `div[data-test-id="pagination-contsiner"] button[data-test-id="number-pagination"]`
      ).should("have.length", 4);
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Check if changing the page updates the UI", () => {
      cy.intercept("**/movies", movies).as("apiRequest");
      cy.visit(url);
      cy.wait("@apiRequest");
      cy.get(
        `div[data-test-id="pagination-contsiner"] button[data-test-id="number-pagination"]`
      )
        .eq(1)
        .click();
      movies
        .slice(10, 20)
        .forEach(({ name, actor, language, averageReview }, index) => {
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(name);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(actor);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(language);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(averageReview);
        });
      cy.get(
        `div[data-test-id="pagination-contsiner"] button[data-test-id="number-pagination"]`
      )
        .eq(2)
        .click();
      movies
        .slice(20, 30)
        .forEach(({ name, actor, language, averageReview }, index) => {
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(name);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(actor);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(language);
          cy.get(
            `div[data-test-id="container"] div[data-test-id="movie-card"]:nth-child(${
              index + 1
            })`
          ).contains(averageReview);
        });

      cy.then(() => (acc_score += 1));
    }); //1

    after(() => {
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
    });
  });
});

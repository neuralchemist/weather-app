/// <reference types="Cypress" />

describe("E2E Testing weather app", () => {
  beforeEach(() => {
    cy.intercept("https://api.tomorrow.io/v4/**", {
      fixture: "weather.json",
    }).as("weather");
    cy.visit("/");
    cy.clearLocalStorage("wapp-location");
    cy.clearLocalStorage("wapp-weather");
  });

  it("fetch weather successfull", () => {
    cy.get("h2").should("have.text", "Predicting The Future");
    cy.get(".MuiGrid-container > .MuiGrid-item").should("have.length", 7);
  });

  it("fetch weather unsuccessfull", () => {
    cy.intercept("https://api.tomorrow.io/v4/**", {
      statusCode: 501,
    }).as("weather");
    cy.visit("/");
    cy.get(".MuiAlert-message").should("contain", "Request failed");
  });

  it("should show alert error if navigator.geolocation.getCurrentPosition fails", () => {
    cy.stubGeolocation();
    cy.get(".MuiAlert-message").should("contain", "Failed to get location");
  });

  it("should store location from geolocation api in localstorage", () => {
    cy.clearLocalStorage().should((localStorage) => {
      expect(localStorage.getItem("wapp-location")).to.be.null;
      expect(localStorage.getItem("wapp-weather")).to.be.null;
    });
    cy.stubGeolocation(35, 137);
    cy.get(".MuiGrid-container > .MuiGrid-item")
      .should("have.length", 7)
      .should(() => {
        expect(localStorage.getItem("wapp-location")).to.eq("35,137");
      });
  });
});

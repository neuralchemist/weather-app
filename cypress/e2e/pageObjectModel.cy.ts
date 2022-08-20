/// <reference types="cypress"/>
import LoginPage from "./pages/LoginPage";

const loginpage = new LoginPage();

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  it("login pass", () => {
    loginpage.enterUsername("Admin");
    loginpage.enterPassword("admin123");
    loginpage.clickLoginButton();
  });

  it.skip("login fail", () => {
    loginpage.enterUsername("Admin");
    loginpage.enterPassword("wrongpassword");
    loginpage.clickLoginButton();
  });
});

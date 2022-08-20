class LoginPage {
  username_textbox: string;
  password_textbox: string;
  login_button: string;
  constructor() {
    this.username_textbox = "#txtUsername";
    this.password_textbox = "#txtPassword";
    this.login_button = "#btnLogin";
  }
  enterUsername(username: string) {
    cy.get(this.username_textbox).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.password_textbox).type(password);
  }

  clickLoginButton() {
    cy.get(this.login_button).click();
  }
}

export default LoginPage;

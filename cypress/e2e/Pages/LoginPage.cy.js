class LoginPage {
  elements = {
    linkLogin: () => cy.contains('a', /signup \/ login/i),
    headerLogin:     () => cy.contains('h2', /login to your account/i),
    inputEmail:      () => cy.get('input[data-qa="login-email"]'),
    inputPassword:   () => cy.get('input[data-qa="login-password"]'),
    btnLogin:        () => cy.get('button[data-qa="login-button"]'),
    bannerLoggedIn:  () => cy.contains(/logged in as/i),
    linkLogout:      () => cy.contains('a', /logout/i),
    loginError:      () => cy.contains(/your email or password is incorrect!/i),
  };

  visitHome() {
    cy.visit('https://automationexercise.com');
    return this;
  }

  openLogin() {
    this.elements.linkLogin().click();
    this.elements.headerLogin().should('be.visible');
    return this;
  }

  fillEmail(email) {
    this.elements.inputEmail().clear().type(email);
    return this;
  }

  fillPassword(password) {
    this.elements.inputPassword().clear().type(password, { log: false });
    return this;
  }

  submit() {
    this.elements.btnLogin().click();
    return this;
  }

  assertLoggedIn() {
    this.elements.bannerLoggedIn().should('be.visible');
    this.elements.linkLogout().should('be.visible');
    return this;
  }

  assertLoginError() {
    this.elements.loginError().should('be.visible');
    return this;
  }

}

module.exports = new LoginPage();

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const LoginPage = require('../Pages/LoginPage.cy'); 

Given('que estou na página inicial do AutomationExercise', () => {
  LoginPage.visitHome();
  LoginPage.elements.linkLogin().should('be.visible');
});

Given('acesso a tela de Login', () => {
  LoginPage.openLogin();
});

When('tento entrar com o e-mail {string} e a senha {string}', (email, senha) => {
  LoginPage
    .fillEmail(email)
    .fillPassword(senha)
    .submit();
});

When('tento entrar com credenciais validas', () => {
   cy.fixture("example").then((example) => {
        LoginPage
        .fillEmail(example.emailValido)
        .fillPassword(example.senhaValida)
        .submit();
    })
    
});

Then('devo ver que estou autenticado', () => {
  LoginPage.assertLoggedIn();
});

Then('devo ver a mensagem de erro de login', () => {
  LoginPage.assertLoginError();
});
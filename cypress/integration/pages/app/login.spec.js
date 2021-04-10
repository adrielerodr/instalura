/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.visit('/app/login/');
    cy.get('#formRegister input[name="user"]').type('omariosouto');
    cy.get('#formRegister input[name="password"]').type('senhasegura');
    cy.get('#formRegister button[type="submit"]').click();
    cy.url().should('include', '/app/profile');
  });
});

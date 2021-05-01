export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/app/login');
  }

  fillLoginForm({ username, password }) {
    this.cy.get('#formRegister input[name="user"]').type(username);
    this.cy.get('#formRegister input[name="password"]').type(password);

    return this;
  }

  submitLoginForm() {
    this.cy.get('#formRegister button[type="submit"]').click();

    return this;
  }
}

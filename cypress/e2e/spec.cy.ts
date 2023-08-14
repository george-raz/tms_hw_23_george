describe('Forgot password page suite', () => {
  beforeEach(() => {
    cy.openForgotPage();
  })
  it("Page content is accurate", () => {
    let title = "Forgot password?"
    let description = "Enter your details below to request an Envato account password reset.";
    cy.get('div[data-testid="requestResetFormTitle"]').should('have.text', title);
    cy.get('div[class="sc-gEvEer Xzwsn sc-fPXMVe sc-bmzYkS jAwgXy jMJQjw"]').should('have.text', description);
  })
  it("User name and email inputs are required", () => {
    let usernameError = "Username is required";
    let emailError = "Email is required";
    cy.get('button[data-testid="submitButton"]').click();
    cy.get('div[data-testid="username-error"]').should('have.text', usernameError);
    cy.get('div[data-testid="email-error"]').should('have.text', emailError);
  })
  it("Invalid email format is validated", () => {
    let emailError = "Email is invalid";
    cy.get('input[id="email"]').type("test");
    cy.get('button[data-testid="submitButton"]').click();
    cy.get('div[data-testid="email-error"]').should('have.text', emailError);
  })
  it("Invalid email error message disappears after format is changed to valid", () => {
    cy.get('input[id="email"]').type("test");
    cy.get('button[data-testid="submitButton"]').click();
    cy.get('input[id="email"]').type("test@gmail.com");
    cy.get('div[data-testid="email-error""]').should('not.exist');
  })
  it("Error messages disappear after page refresh", () => {
    cy.get('button[data-testid="submitButton"]').click();
    cy.reload();
    cy.get('div[data-testid="email-error"]').should('not.exist');
    cy.get('div[data-testid="username-error"]').should('not.exist');
  })
})
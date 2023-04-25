describe('home', () => {
  it('Souhld go to Auth0', () => {
    cy.visit(Cypress.env('AUTH0_BASE_URL'))
    cy.url().should('include', Cypress.env('AUTH0_ISSUER_BASE_URL'))
  })
})


function loginViaAuth0Ui(username, password) {
    
    // Hack because tests fail if starting with redirect to Auth0
    // https://github.com/cypress-io/cypress/issues/25373#issuecomment-1447281023
    cy.visit(`${Cypress.env('AUTH0_BASE_URL')}/test/login`);
    cy.get('a').click();

    cy.origin(
        Cypress.env('AUTH0_ISSUER_BASE_URL'),
        { args: { username, password } },
        ({ username, password }) => {
            cy.get('input[name=username]').type(username)
            cy.get('input[name=password]').type(password, { log: false })
            cy.get('button[name=submit]').click()
        }
    );
    
    // Ensure Auth0 has redirected us back to the app
    cy.url().should('equal', `${Cypress.env('AUTH0_BASE_URL')}/`);

}
  
Cypress.Commands.add('loginToAuth0', (username, password) => {

    const log = Cypress.log({
        displayName: 'AUTH0 LOGIN',
        message: [`🔐 Authenticating | ${username}`],
        autoEnd: false,
    })

    log.snapshot('before')

    loginViaAuth0Ui(
        username, 
        password,
    )

    log.snapshot('after')
    log.end()

})
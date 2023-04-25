Cypress.Commands.add('checkUserName', (username) => {

    const log = Cypress.log({
        displayName: 'Check User Name',
        autoEnd: false,
    })

    log.snapshot('before')

    cy.get('[data-testid=username]').should('have.text', username)

    log.snapshot('after')
    log.end()

})
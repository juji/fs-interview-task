Cypress.Commands.add('todoListExists', () => {

    const log = Cypress.log({
        displayName: 'Todo List Exist',
        autoEnd: false,
    })

    log.snapshot('before')

    cy.get('[data-testid=itemlist]').should('be.visible')

    log.snapshot('after')
    log.end()

})
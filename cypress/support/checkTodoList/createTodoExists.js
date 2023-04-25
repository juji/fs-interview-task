Cypress.Commands.add('createTodoExists', ( isAdmin ) => {

    const log = Cypress.log({
        displayName: isAdmin ? 'Can Create' : "Can't Create",
        autoEnd: false,
    })

    log.snapshot('before')

    if(isAdmin){
        cy.get('[data-testid=createtodo]').should('be.visible')
    }else{
        cy.get('[data-testid=createtodo]').should('not.exist')
    }

    log.snapshot('after')
    log.end()

})
Cypress.Commands.add('itemJsonExists', ( bool ) => {

    const log = Cypress.log({
        displayName: bool ? 'Can Create' : "Can't Create",
        autoEnd: false,
    })

    log.snapshot('before')

    if(bool){
        cy.get('[data-testid=itemjson]').should('be.visible')
    }else{
        cy.get('[data-testid=itemjson]').should('not.exist')
    }

    log.snapshot('after')
    log.end()

})
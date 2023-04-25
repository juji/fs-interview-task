Cypress.Commands.add('deleteTodo', ( isAdmin, text ) => {

    const log = Cypress.log({
        displayName: isAdmin ? 'Removing Todo Item' : 'Checking Removed Todo Item',
        autoEnd: false,
    })

    log.snapshot('before')

    if(isAdmin){

        // remove to do item
        cy.get('input[data-testid=todoiteminput]').first().should('exist')
        cy.get('input[data-testid=todoiteminput]').first().should('have.value', text)
        cy.get('button[data-testid=todoitemremove]').first().should('exist')
        cy.get('button[data-testid=todoitemremove]').first().click()
        cy.wait(2000, { timeout: 2000 })
    
        cy.get('input[data-testid=todoiteminput]')
            .filter((k, el) => el.value === text)
            .should('have.length', 0)
    
    }else{

        cy.get('[data-testid=todoitem] li').contains(text).should('have.length', 0)

    }
        
    log.snapshot('after')
    log.end()

})
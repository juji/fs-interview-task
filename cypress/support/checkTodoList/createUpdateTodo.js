Cypress.Commands.add('createUpdateTodo', ( isAdmin, text ) => {

    const log = Cypress.log({
        displayName: isAdmin ? 'Creating Todo Item' : "Checking new todo item",
        autoEnd: false,
    })

    log.snapshot('before')

    if(isAdmin){

        // write todo item
        cy.get('[data-testid=createtodo] input[type=text]').should('be.visible')
        cy.get('[data-testid=createtodo] input[type=text]').type(text)
        cy.get('[data-testid=createtodo] [type=submit]').click()
        cy.wait(1000, { timeout: 1000 })
        cy.get('input[data-testid=todoiteminput]').first().should('have.value', text)

        // set todo item as done
        cy.get('[data-testid=todoitemdone]').first().click()
        cy.wait(1000, { timeout: 1000 })
        cy.get('[data-testid=todoitemdone]').first().contains('☑').should('be.visible')
        

    }else{

        // ui to create should not exists
        cy.get('[data-testid=createtodo]').should('not.exist')

        // get item containing text, and it should be done
        cy.get('[data-testid=todoitem] li s').contains(text).should('be.visible')

    }

    log.snapshot('after')
    log.end()

})
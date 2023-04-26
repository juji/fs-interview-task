import user from '../fixtures/users/admin.json'

describe('admin', () => {

  it('logs in using admin', () => {
    
    cy.session([user.username, user.password], () => {
  
      cy.loginToAuth0(
        user.username,
        user.password
      )
  
      cy.checkUserName(user.name)
      cy.todoListExists()
      cy.createTodoExists( true )
      cy.itemJsonExists( true )

    })

  })


})
import user from '../fixtures/users/regular.json'

describe('user', () => {

  it('logs in using regular user', () => {

    cy.session([user.username, user.password], () => {
  
      cy.loginToAuth0(
        user.username,
        user.password
      )
  
      cy.checkUserName(user.username)
      cy.todoListExists()
      cy.createTodoExists( false )
      cy.itemJsonExists( false )

    })
    
  })

  
})
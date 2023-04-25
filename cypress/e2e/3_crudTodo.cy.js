import user from '../fixtures/users/regular.json'
import admin from '../fixtures/users/admin.json'

const todoItemText = `randomtodo:${Math.round(999999999*Math.random())}`

describe('crudTodo', () => {

    const login = (user, id, func) => {
        cy.session([user.username, id], () => {
            cy.loginToAuth0(
                user.username,
                user.password
            )

            func()
        })
    }

    it('should sync updates', () => {

        // admin creating todo
        login(admin, Math.round(Math.random()*9999999999), () => {
            cy.createUpdateTodo( true, todoItemText )
        })

        // in userland, it should exists
        login(user, Math.round(Math.random()*9999999999), () => {
            cy.createUpdateTodo( false, todoItemText )
        })

        // admin removing todo
        login(admin, Math.round(Math.random()*9999999999), () => {
            cy.deleteTodo( true, todoItemText )
        })

        // in userland, it should not exists
        login(user, Math.round(Math.random()*9999999999), () => {
            cy.deleteTodo( false, todoItemText )
        })

  
    })
  
  
  })

import { useUser } from '@auth0/nextjs-auth0/client';

import styles from './todoList.module.scss'
import useTodo from './useTodo'
import CreateTodo from './CreateTodo'
import TodoItemInput from './TodoItemInput'
import TodoItemList from './TodoItemList'

export default function TodoList(){

    const { user, error: userError, isLoading } = useUser();
    
    const { 
        list, loading, error, 
        createTodo,
        updateTodo,
        deleteTodo
    } = useTodo()
    
    if(userError || isLoading) return null;
    
    const accessTokenScope:any = user && user.accessTokenScope

    return <div className={styles.todoList}>
        <h1>Todo List</h1>

        { loading ? <p data-testid="lodinglist">loading...</p> : 
            error ? <p data-testid="errorlist" className={styles.error}>{JSON.stringify(error)}</p> :
            accessTokenScope ? <div data-testid="itemlist">

                { accessTokenScope['write:todo'] ? 
                    <CreateTodo onCreate={createTodo} /> : null }

                {list.map((todo:any) => !!accessTokenScope['write:todo'] ? <TodoItemInput 
                    key={todo.id}
                    onUpdate={updateTodo}
                    onRemove={deleteTodo}
                    item={todo} 
                /> : <TodoItemList key={todo.id} item={todo} /> )}

                { accessTokenScope['write:todo'] ? <div data-testid="itemjson">
                    <p style={{margin:'2rem 0'}}>Data:</p>
                    <pre>{JSON.stringify(list,null,2)}</pre>
                </div> : null }
                
            </div> : null
        }
        
    </div>

}
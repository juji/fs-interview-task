
import { useUser } from '@auth0/nextjs-auth0/client';

import styles from './todoList.module.scss'
import useTodo from './useTodo'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

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

        { loading ? <p>loading...</p> : 
            error ? <p className={styles.error}>{JSON.stringify(error)}</p> :
            accessTokenScope ? <>

                { accessTokenScope['write:todo'] ? 
                    <CreateTodo onCreate={createTodo} /> : null }
                
                {list.map((todo:any) => <TodoItem 
                    key={todo.id}
                    canUpdate={!!accessTokenScope['write:todo']}
                    onUpdate={updateTodo}
                    onRemove={deleteTodo}
                    item={todo} 
                />)}

                { accessTokenScope['write:todo'] ? <>
                    <p style={{margin:'2rem 0'}}>Data:</p>
                    <pre>{JSON.stringify(list,null,2)}</pre>
                </> : null }
                
            </> : null
        }
        
    </div>

}
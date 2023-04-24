
import styles from './todoList.module.scss'
import useTodo from './useTodo'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

export default function TodoList(){

    const { 
        list, loading, error, 
        createTodo,
        updateTodo,
        deleteTodo
    } = useTodo()

    return <div className={styles.todoList}>
        <h1>Todo List</h1>

        { loading ? <p>loading...</p> : 
            error ? <p className={styles.error}>{JSON.stringify(error)}</p> :
            <>
                <CreateTodo onCreate={createTodo} />
                
                {list.map((todo:any) => <TodoItem 
                    key={todo.id}
                    canUpdate={true}
                    onUpdate={updateTodo}
                    onRemove={deleteTodo}
                    item={todo} 
                />)}

                <p style={{margin:'2rem 0'}}>Data:</p>
                <pre>{JSON.stringify(list,null,2)}</pre>
            </>
        }
        
    </div>

}
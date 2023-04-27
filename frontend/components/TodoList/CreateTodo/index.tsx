
import { useState, FormEvent } from 'react'
import styles from './createTodo.module.scss'

export default function CreateTodo({ onCreate }:{
    onCreate: (str: string) => void
}){

    const [ value, setValue ] = useState('')
    const [ error, setError ] = useState(null)

    const create = async (e: FormEvent) => {

        e.preventDefault()
        
        error && setError(null);
        if(!value) return;
        
        try{
            await onCreate(value)
        }catch(e){
            setError(e)
        }
        setValue('')
    }

    return <>
        <div data-testid="createtodo" className={styles.createTodoContainer}>
            <form data-testid="createtodoform" onSubmit={create} className={styles.createTodo}>
                <input data-testid="createtodoinput" type="text" placeholder="Add todo item here" value={value} onChange={(e) => setValue(e.target.value)} />
                <button data-testid="createtodosubmit" disabled={!value} type="submit">Add</button>
            </form >
            <div className={styles.createTodoError}>
                { error ? JSON.stringify(error) : null }
            </div>
        </div>
    </>

}
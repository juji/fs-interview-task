
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
        <div className={styles.createTodoContainer}>
            <form onSubmit={create} className={styles.createTodo}>
                <input placeholder="Add todo item here" value={value} onChange={(e) => setValue(e.target.value)} />
                <button disabled={!value} type="submit">Add</button>
            </form >
            <div className={styles.createTodoError}>
                { error ? JSON.stringify(error) : null }
            </div>
        </div>
    </>

}
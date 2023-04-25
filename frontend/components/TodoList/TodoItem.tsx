import { useState, FormEvent } from 'react'
import styles from './todoItem.module.scss'

export default function TodoItem({
    item,
    onUpdate,
    onRemove,
    canUpdate = true
}:{
    item: any
    canUpdate?: boolean
    onUpdate?: (id: string, text: string, done: boolean) => void
    onRemove?: (id: string) => void
}){

    const { id, text, done } = item
    const [ currentText, setText ] = useState(text)
    const [ currentDone, setDone ] = useState(done)
    const [ isFocused, setIsFocused ] = useState(false)
    const [ isRemoved, setRemoved ] = useState(false)

    const updateDone = async () => {
        const isDone = !done
        setDone(isDone)

        try{
            onUpdate && await onUpdate(id, text, isDone)
        }catch(e){
            setDone(done)
        }
    }

    const updateText = async (e:FormEvent) => {
        e.preventDefault()
        setIsFocused(false)
        if(currentText === text) return;

        try{
            onUpdate && await onUpdate(id, currentText, done)
        }catch(e){
            setText(text)
        }
        
    }

    const remove = async () => {
        setRemoved(true)
        try{
            onRemove && await onRemove(id)
        }catch(e){
            setRemoved(false)
        }
    }

    if(isRemoved) return null

    if(!canUpdate) return <ul 
        data-testid="todoitem"
        className={styles.noUpdate}>
        <li>
            {done ? <s data-testid="todostrike">
                {item.text}</s> : item.text}
        </li>
    </ul>

    return <div className={styles.todoItem}>
        <div className={styles.isDone}>
            <button data-testid="todoitemdone" 
                disabled={isFocused} onClick={updateDone}>
                {currentDone ? '☑' : '☐' }
            </button>
        </div>
        <form onSubmit={updateText} className={styles.textField}
            onBlur={updateText}
            onFocus={() => setIsFocused(true)}
        >
            <input type="text" data-testid="todoiteminput"
                disabled={!!currentDone}
                value={currentText}
                onChange={e => setText(e.target.value)}
            />
        </form>
        <div className={styles.removeButton}>
            <button data-testid="todoitemremove" onClick={remove}>x</button>
        </div>
    </div>

}
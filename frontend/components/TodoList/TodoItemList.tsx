import { useState, FormEvent } from 'react'
import styles from './todoItemList.module.scss'

export default function TodoItem({
    item
}:{
    item: any
}){

    const { id, text, done } = item
    

    return <ul 
        data-testid="todoitem"
        className={styles.todoItemList}>
        <li>
            {done ? <s data-testid="todostrike">
                {text}</s> : text}
        </li>
    </ul>

}
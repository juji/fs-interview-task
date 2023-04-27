import { useState, FormEvent } from 'react'
import styles from './todoItemList.module.scss'

export default function TodoItemList({
    item
}:{
    item: { id: string, text: string, done: boolean }
}){

    const { id, text, done } = item
    

    return <ul 
        data-testid="todoitem"
        className={styles.todoItemList}>
        <li data-testid="todotext">
            {done ? <s data-testid="todostrike">
                {text}</s> : text}
        </li>
    </ul>

}
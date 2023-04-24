import { ReactNode } from "react"
import styles from './layout.module.scss'
import UserBar from './UserBar'

export default function Layout({ children }:{ children: ReactNode }){

    return <div className={styles.layout}>
        <div>
            <UserBar />
            { children }
        </div>
    </div>

}
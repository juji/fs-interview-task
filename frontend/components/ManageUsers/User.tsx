import { useState, useMemo, ChangeEvent } from 'react'
// import randomstring from 'randomstring'

import styles from './user.module.scss'

export default function User ({ 
    user,
    onChange 
}:{ 
    user: any 
    onChange: (user:any, allowWrite: boolean) => void
}){

    const isAdmin = user.app_metadata?.role === 'admin'
    const [ allowWrite, setAllowWrite ] = useState(
        !!user.permissions.find((v:any) => v.permission_name === 'write:todo')
    )
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkBoxId = useMemo(() => `checkbox${Math.random()}`,[ user ])
    const onchange = async (e: ChangeEvent<HTMLInputElement>) => {

        const val = !!e.target.checked
        try{
            setAllowWrite(val)
            await onChange(user, val)
        }catch(e){
            setAllowWrite(!val)
        }
    }

    return <div className={styles.user}>
        <p>{user.name} {isAdmin?<span>(admin can&apos;t be managed here)</span>:null}</p>
        {isAdmin?null:<div>
            <input type="checkbox" 
                checked={allowWrite}
                onChange={onchange}
                id={checkBoxId} 
                name="allowWrite" />
            <label htmlFor={checkBoxId}>Allow Write</label>
        </div>}
    </div>

}
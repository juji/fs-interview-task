import { useUser } from '@auth0/nextjs-auth0/client';
import style from './userbar.module.scss'
import Link from 'next/link'

export default function UserBar(){

    const { user, error, isLoading } = useUser();
    if (isLoading) return <div className={style.userbar}>Loading User...</div>;
    if (error) return <div className={`${style.userbar} ${style.error}`}>{error.message}</div>;

    // console.log('user', user)

    return user ? <div className={style.userbar}>
        <div className={style.userbarLeft}>
            <img src={user.picture as string} alt={user.nickname as string} />
            <span data-testid="username">{user.nickname}</span>
        </div>
        <div className={style.userbarRight}>
            <Link href="/api/auth/logout">logout</Link>
        </div>
        {/* <pre>
            {JSON.stringify(user,null,2)}
        </pre> */}
    </div> : null

}
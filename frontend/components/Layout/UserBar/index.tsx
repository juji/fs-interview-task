import { useUser } from '@auth0/nextjs-auth0/client';
import style from './userbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';


export default function UserBar(){

    const { user, error, isLoading } = useUser();
    const { pathname } = useRouter()
    
    if (isLoading) return <div className={style.userbar}>Loading User...</div>;
    if (error) return <div className={`${style.userbar} ${style.error}`}>{error.message}</div>;

    const accessTokenScope:any = user && user.accessTokenScope

    return user ? <div className={style.userbar}>
        <div className={style.userbarLeft}>
            <Image src={user.picture as string} alt={user.name as string} />
            <div>
                <span data-testid="username">{user.name}</span>
                <Link href="/api/auth/logout">logout</Link>
            </div>
        </div>
        <div className={style.userbarRight}>
            {accessTokenScope?.admin ? 
                (pathname !== '/' ? 
                    <Link href="/">&lt; Home</Link> :
                    <Link href="/users">Manage Users</Link>) : null}
        </div>
        {/* <pre>
            {JSON.stringify(user,null,2)}
        </pre> */}
    </div> : null

}
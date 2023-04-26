
import useUsers from './useUsers';
import User from './User'

export default function ManageUsers (){

    

    const { users, error, loading, setWritePermission } = useUsers()

    const onChange = (user:any, allowWrite:boolean) => {
        setWritePermission( user.user_id, allowWrite)
    }

    return loading ? <p>Loading...</p> : 
        error ? <p>{JSON.stringify(error)}</p> :
        users ? <>
            <h1>Manage Users</h1>
            {users.map((user:any) => <User 
                key={user.user_id}
                user={user} 
                onChange={onChange} 
            />)}
        </> : null
}
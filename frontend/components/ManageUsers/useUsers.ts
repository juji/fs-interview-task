import useSWR from 'swr'

import { GET, POST } from '@/lib/request'

export default function useUsers(){

    const { 
        data, 
        error,
        isLoading: loading,
        mutate
    } = useSWR('/api/users', GET)
    
    async function setWritePermission(userId: string, allowWrite: boolean){

        await POST('/api/users/write-permission',{ userId, allowWrite })
        mutate()

    }
    
    return {
        users: data as [],
        error, 
        loading,
        setWritePermission
    }


}
import useSWR from 'swr'
import { GET, POST, PATCH, DELETE } from '@/lib/request'

export default function useTodo(){

    const { 
        data: list, 
        error,
        isLoading: loading,
        mutate
    } = useSWR('/api/get', GET)

    const createTodo = async (text: string) => {
        const resp = await POST('/api/add', { text })
        mutate([
            resp,
            ...(list as []),
        ])
    }

    const updateTodo = async (id:string, text: string, done: boolean) => {

        const resp = await PATCH(`/api/update/${id}`, { text, done })
        const idx = (list as any[]).findIndex(v => v.id === id)
        if(idx === -1) return;

        mutate([
            ...((list as []).slice(0,idx)),
            resp,
            ...((list as []).slice(idx+1)),
        ])
        
    }

    const deleteTodo = async (id:string) => {

        await DELETE(`/api/remove/${id}`)
        const idx = (list as any[]).findIndex(v => v.id === id)
        if(idx === -1) return;

        mutate([
            ...((list as []).slice(0,idx)),
            ...((list as []).slice(idx+1)),
        ])

    }
    
    return {
        list,
        error, 
        loading,
        createTodo,
        updateTodo,
        deleteTodo
    }


}
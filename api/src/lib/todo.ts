import randomstring from 'randomstring'

let todo = [
    {
        id: 'asldfhiowehfw4h7fh2348',
        text: 'todo1',
        done: false
    },
    {
        id: 'kdzjhf3478hf4783ghf',
        text: 'todo2',
        done: false
    },
    {
        id: 'lkuasderiaulhf3479sdjfh',
        text: 'todo3',
        done: false
    }
]

export default {
    get: async () => todo,
    add: async (text: string) => {
        const addition = {
            id: randomstring.generate(),
            done: false,
            text
        }

        todo = [
            addition,
            ...todo,
        ]
        
        return {
            todo,
            addition
        }
    },
    rem: async (id: string) => {
        const idx = todo.findIndex(v => v.id === id)
        if(idx === -1) return { todo }
        const removed = { ...todo[idx] }

        todo = [
            ...todo.slice(0,idx),
            ...todo.slice(idx+1)
        ]

        return {
            todo,
            removed,
            index: idx
        }
    },
    update: async (
        id: string, 
        { text, done }: { text: string, done: boolean }
    ) => {

        const idx = todo.findIndex(v => v.id === id)
        if(idx === -1) return { todo }
        const updated = { 
            ...todo[idx],
            done,
            text
        }
        
        todo = [
            ...todo.slice(0,idx),
            updated,
            ...todo.slice(idx+1)
        ]

        return {
            todo,
            updated,
            index: idx
        }
    }
}

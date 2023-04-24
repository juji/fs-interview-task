
class RequestError extends Error {
    status: number | undefined;
    info: number | undefined;
}

const response = async (res: any) => {
    if (!res.ok) {
        const error = new RequestError('An error occurred while fetching the data.')
        error.info = await res.json()
        error.status = res.status
        throw error
    }
     
    return res.json()
}

export const GET = (url: string) => fetch(url,{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}).then(response)

export const POST = (url: string, data: any) => fetch(url,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(response)

export const PATCH = (url: string, data: any) => fetch(url,{
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(response)

export const DELETE = (url: string) => fetch(url,{
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
    },
}).then(response)
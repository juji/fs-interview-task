import { getAccessToken } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next'

const apiPrefix = process.env.API_PREFIX;

export default async function requestWithToken({
    req,
    res,
    scopes,
    uri,
    data,
    method = 'GET',
    contentType = 'application/json'
}:{
    req: NextApiRequest
    res: NextApiResponse
    scopes: string[]
    uri: string
    data?: any
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD',
    contentType?: string
}){

    // const { accessToken } = await getAccessToken(req, res, { scopes });

    const response = await fetch(`${apiPrefix}${uri}`, {
        method,
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            ...(data?{ 'Content-Type': contentType }:{})
        },
        ...(data?{ body: JSON.stringify(data) }:{})
    });

    return await response.json()
}


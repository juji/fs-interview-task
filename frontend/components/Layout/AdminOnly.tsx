import type { ReactNode } from 'react'

import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router'


// only for admin
export default function AdminOnly({ children }:{ children: ReactNode }){
    
    const { user, error: userError, isLoading } = useUser();
    if(userError || isLoading) return null; // loading?

    const router = useRouter()
    const accessTokenScope:any = user && user.accessTokenScope
    useEffect(() => {

        if(
            (!user && !isLoading) ||
            !accessTokenScope.admin
        ) router.push('/')

    },[ user, isLoading, accessTokenScope ])

    return user ? <>{children}</> : null;

}
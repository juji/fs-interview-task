
import { ManagementClient } from 'auth0'


// typescipt is giving errors on types
// so the rest of the module will use js
export const auth0 = new ManagementClient({
    domain: process.env.AUTH0_ISSUER_BASE_URL?.replace('https://','') || '',
    clientId: process.env.AUTH0_M2M_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_M2M_CLIENT_SECRET || '',
    scope: 'read:users update:users create:role_members read:role_members delete:role_members',
});
import { auth, requiredScopes }  from 'express-oauth2-jwt-bearer';

export const jwtCheck = auth({
    audience: 'http://localhost:3333',
    issuerBaseURL: 'https://jujiyangasli.auth0.com/',
    tokenSigningAlg: 'RS256'
});

export const allowRead = requiredScopes('read:todo')
export const allowWrite = requiredScopes('write:todo')


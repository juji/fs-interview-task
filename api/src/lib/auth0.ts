import { auth, requiredScopes }  from 'express-oauth2-jwt-bearer';

const audience = process.env.AUTH0_BASE_URL || 'http://localhost:3333'
const issuerBaseURL = `${process.env.AUTH0_ISSUER_BASE_URL || 'https://jujiyangasli.auth0.com'}/`

export const jwtCheck = auth({
    audience,
    issuerBaseURL,
    tokenSigningAlg: 'RS256'
});

export const allowRead = requiredScopes('read:todo')
export const allowWrite = requiredScopes('write:todo')


import { NextFunction, Request, Response } from 'express';


export const PERMISSION = {
    READ: 'auth0 read',
    WRITE: 'auth0 write'
}

export const jwtCheck = (req: Request, res: Response, next: NextFunction) => {

    if(!req.headers.authorization)
        next(new Error('no auth'))

    else if(
        !req.headers.authorization.match(PERMISSION.READ) &&
        !req.headers.authorization.match(PERMISSION.WRITE)
    ) next(new Error('no auth'))
    
    else next()

};

// requiredScopes('read:todo')
export const allowRead = (req: Request, res: Response, next: NextFunction) => {

    if(
        req.headers.authorization && 
        req.headers.authorization.match(PERMISSION.READ)
    ) next()
    
    else next(new Error('no auth'))

}

// requiredScopes('write:todo')
export const allowWrite = (req: Request, res: Response, next: NextFunction) => {

    if(
        req.headers.authorization && 
        req.headers.authorization.match(PERMISSION.WRITE)
    ) next()
    
    else next(new Error('no auth'))

}


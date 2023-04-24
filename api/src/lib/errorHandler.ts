import { NextFunction, Request, Response } from 'express';

export default function errorHandler(
    err: any, 
    req: Request, 
    res: Response, 
    next: NextFunction
){

    // if headers sent, just print
    if(res.headersSent){
        console.log(err)
        return;
    }

    console.error(err.stack || err)
    res.status(500).send('Something broke!')

}


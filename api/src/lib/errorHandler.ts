import { NextFunction, Request, Response } from 'express';

const isTesting = process.env.TEST || process.env.TESTING

export default function errorHandler(
    err: any, 
    req: Request, 
    res: Response, 
    next: NextFunction
){

    // if headers sent, just print
    if(res.headersSent){
        if(!isTesting) console.log(err)
        return;
    }

    if(!isTesting) console.error(err.stack || err)
    res.status(500).send('Something broke!')

}


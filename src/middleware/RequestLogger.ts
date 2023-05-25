import { NextFunction, Request, Response } from "express";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {

    const request = {
        path:`${req.method} ${req.originalUrl}`,
        headers: req.headers,
        params: req.params,
    };

    console.log("Received request: ", request);
    next();
}

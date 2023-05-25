import { HttpCode } from "../enums/HttpCode";

export class HttpError extends Error {
    public httpCode: HttpCode;

    constructor(httpCode: HttpCode, message: string) {
        super(message);
        this.httpCode = httpCode;

        Error.captureStackTrace(this);
    }
}

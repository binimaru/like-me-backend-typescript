import { StatusCodes } from "http-status-codes";

export default class ResponseError implements Error {
    statusCode?: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR;
    constructor(error: Error, statusCode: StatusCodes) {
        this.statusCode = statusCode;
        this.name = error.name;
        this.message = error.message;
    }
    name: string;
    message: string;
    stack?: string | undefined;
}
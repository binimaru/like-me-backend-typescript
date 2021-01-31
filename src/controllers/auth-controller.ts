import { NextFunction, Request, RequestHandler, Response } from "express";
import StatusCodes from 'http-status-codes';
import user, { User } from "../models/user";

/**
 * creates a user in the database
 * @param {Request} request the request param
 * @param {Response} response what is up dude
 * @param {NextFunction} next the next function handler
 * @returns {void}
 */
export const signUp: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
    const userToBeAdded = request.body as User
    const userModel = new user(userToBeAdded);
    try {
        const savedUser = await userModel.save()
        response.status(StatusCodes.CREATED).json(savedUser);
    } catch (err) {
        next(err);
    }
} 
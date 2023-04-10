import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JWTPayload {
    id: number;
    email: string;
    sub: string;
    iat: number;
    exp: number;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send();

    const [prefix, token] = authorization.split(" ");

    try {
        const validTokent = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
        req.auth_user = {
            id: validTokent.id,
            email: validTokent.email,
        };

        return next();

    } catch (error) {
        return res.status(401).send();
    }


}
declare namespace Express {
    export interface Request {
        auth_user: {
            id: number;
            email: string;
        }
    }
}
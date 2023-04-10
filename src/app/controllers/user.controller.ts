import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();

class UserController {

    async create(req: Request, res: Response) {
        const data = await service.create(req.body);
        return res.status(201).json(data);
    }

    async auth(req: Request, res: Response) {
        const data = await service.auth(req.body);
        return res.json(data);
    }
}

export { UserController };
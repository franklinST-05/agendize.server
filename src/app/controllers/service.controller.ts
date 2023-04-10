import { Request, Response } from "express";
import { afterEach } from "node:test";
import { ServiceService } from "../services/service.service";

const service = new ServiceService();

class ServiceController {
    async create(req: Request, res: Response) {
        const data = await service.create(req.body);
        return res.json(data);
    }
}

export { ServiceController };
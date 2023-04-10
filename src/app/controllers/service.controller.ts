import { Request, Response } from "express";
import { ServiceService } from "../services/service.service";

const service = new ServiceService();

class ServiceController {
    async create(req: Request, res: Response) {
        const data = await service.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.auth_user.id,
        });
        return res.json(data);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const deleted = await service.deleteById(Number(id), req.auth_user.id);
        if (deleted.rowCount > 0) { return res.status(200).send(); }

        return res.status(500).send();
    }

    async findAll(req: Request, res:Response) {
        const data = await service.findAll();
        return res.json(data.rows);
    }

    async findByUser(req: Request, res:Response) {
        const data = await service.findByUser(req.auth_user.id);
        return res.json(data.rows);
    }
}

export { ServiceController };
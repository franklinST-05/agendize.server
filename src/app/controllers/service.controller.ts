import { Request, Response } from "express";
import { ServiceService } from "../services/service.service";

const service = new ServiceService();

class ServiceController {
    async create(req: Request, res: Response) {
        const data = await service.create(req.body);
        return res.json(data);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        
        const deleted = await service.deleteById(Number(id));
        if(deleted.rowCount > 0) {return res.status(200).send();}

        return res.status(500).send();
    }
}

export { ServiceController };
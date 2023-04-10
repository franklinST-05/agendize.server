import { client } from "../../settings/database";
import { IService } from "../models/service.model";
import { ServiceRepository } from "../repositories/service.repository";

const repository = new ServiceRepository(client);

class ServiceService {
    async create(service: IService) {
        const data = await repository.create(service);

        return {
            id: data.rows[0].id,
            title: data.rows[0].title,
            description: data.rows[0].description
        };
    }
}

export { ServiceService };

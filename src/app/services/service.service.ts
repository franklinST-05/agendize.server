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

    async findByUser(userId: number) {
        return await repository.findAllByUserId(userId);
    }

    async findAll() {
        return await repository.findAll();
    }

    async deleteById(id: number, userId: number) {
        try {
            const data = await repository.deleteById(id, userId);
            return data;
        } catch (error) {
            throw new Error("Ocorreu algum erro verifique se esse 'id' existe");
        }
    }
}

export { ServiceService };

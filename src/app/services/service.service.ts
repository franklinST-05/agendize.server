import { getSystemErrorMap } from "util";
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

    async deleteById(id: number) {
        try {
            const data = await repository.deleteById(id);
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Ocorreu algum erro verifique se esse 'id' existe");
        }
    }
}

export { ServiceService };

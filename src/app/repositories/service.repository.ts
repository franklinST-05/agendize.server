import { IClient } from "../../settings/database/infra";
import { IService } from "../models/service.model";

class ServiceRepository {
    private client:IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    async create(service: IService) {

        return await this.client.query({
            sql:/*sql*/`
                INSERT INTO "tb_service" ( "title", "description", "user_id" )
                VALUES ( $1, $2, $3 ) RETURNING *
            `,
            params: [ service.title, service.description, service.userId ]
        });
    }

    async deleteById(id: number) {

        return await this.client.query({
            sql:/*sql*/`
                DELETE FROM "tb_service" WHERE id = $1 
                RETURNING *
            `,
            params: [ id ]
        });
    }

}

export { ServiceRepository };
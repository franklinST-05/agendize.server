import { IClient } from "../../settings/database";
import { IUser } from "../models/user.model";

class UserRepository {
    
    private readonly client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    async create(user: IUser) {

        return await this.client.query({
            sql: /*sql*/`
                INSERT INTO "tb_user" ( "first_name", "last_name", "email", "password" )
                VALUES ( $1, $2, $3, $4 ) 
                RETURNING *
            `,
            params: [ user.firstName, user.lastName, user.email, user.password ]
        });

    }

}

export { UserRepository };

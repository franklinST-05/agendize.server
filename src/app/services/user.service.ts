import { client } from "../../settings/database";
import { IUser, User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

const repository = new UserRepository(client);

class UserService {

    async create(user: IUser) {
        const data = await repository.create(user);
        return new User({
            id: data.rows[0].id,
            firstName: data.rows[0].first_name,
            lastName: data.rows[0].last_name,
            email: data.rows[0].email,
            password: data.rows[0].password,
        });
    }
}

export { UserService };
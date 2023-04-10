/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { client } from "../../settings/database";
import { IUser } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const repository = new UserRepository(client);

class UserService {

    async create(user: IUser) {
        const data = await repository.create({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: await bcrypt.hash(user.password, 8),
        });
        return {
            firstName: data.rows[0].first_name,
            lastName: data.rows[0].last_name,
            email: data.rows[0].email,
        } as IUser;
    }

    async auth(user: { email: string; password: string }) {

        const existsUser = await repository.findByEmail(user.email);
        if (!existsUser.rows[0].id) throw new Error("Não existe um usuario com este email!");

        const validPass = await bcrypt.compare(user.password, existsUser.rows[0].password);
        if (!validPass) throw new Error("Senha invalida!");

        const token = jwt.sign({
            id: existsUser.rows[0].id,
            email: existsUser.rows[0].email,
        }, process.env.JWT_SECRET!, {
            subject: String(existsUser.rows[0].id),
            expiresIn: "30d",
        });

        return { token };
    }
}

export { UserService };
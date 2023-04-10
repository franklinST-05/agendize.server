import { IClientData } from "./infra";
import { PgClient } from "./infra/pg";

export const clientData: IClientData = {
    database: "test",
    host: "127.0.0.1",
    password: "data_pass",
    port: 5432,
    ssl: false,
    user: "postgres",
};

export const client = new PgClient(clientData);
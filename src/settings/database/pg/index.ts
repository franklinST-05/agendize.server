import { Pool, QueryResult } from "pg";
import { IClient, IClientData, IQuery, IQueryResponse } from "../index";

export class PgClient implements IClient {
    private readonly pool: Pool;

    constructor(data: IClientData) {
        this.pool = new Pool({
            ssl: data.ssl,
            user: data.user,
            port: data.port,
            host: data.host,
            database: data.database,
            password: data.password,
        });
    }
    

    public async query(query: IQuery): Promise<IQueryResponse> {
        const result: QueryResult = await this.pool.query(query.sql, query.params);
        return {
            rows: result.rows,
            rowCount: result.rowCount,
        };
    }

    public async connect(): Promise<void> {
        await this.pool.connect();
    }

    public async disconnect(): Promise<void> {
        await this.pool.end();
    }
}

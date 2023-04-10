/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IQuery {
    sql: string;
    params?: any[];
}

export interface IQueryResponse {
    rows: any[];
    rowCount: number;
}

export interface IClientData {
    password: string,
    database: string,
    host: string,
    port: number,
    user: string,
    ssl: boolean,
}

export const clientData: IClientData = {
    database: "test",
    host: "127.0.0.1",
    password: "data_pass",
    port: 5432,
    ssl: false,
    user: "postgres",
};

export interface IClient {
    query(query: IQuery): Promise<IQueryResponse>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}
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

export interface IClient {
    query(query: IQuery): Promise<IQueryResponse>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}
import express from "express";
import dotenv from "dotenv";
import { routes } from "../routes";

const server = express();
dotenv.config();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

export { server };
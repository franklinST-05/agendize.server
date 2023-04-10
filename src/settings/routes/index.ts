import { Router } from "express";
import { UserController } from "../../app/controllers/user.controller";

const routes = Router();

const userController = new UserController();
routes.post("/user", userController.create);

export { routes };
import { Router } from "express";
import { UserController } from "../../app/controllers/user.controller";
import { ServiceController } from "../../app/controllers/service.controller";
import { isAuthenticated } from "../../app/shared/middlewares/isAuthenticated";

const routes = Router();

const userController = new UserController();
routes.post("/user", userController.create);
routes.post("/user/auth", userController.auth);

const serviceController = new ServiceController();
routes.post("/service", isAuthenticated, serviceController.create);
routes.delete("/service/:id", isAuthenticated, serviceController.delete);

export { routes };
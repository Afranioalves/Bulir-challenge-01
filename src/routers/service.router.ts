import express from "express";
import serviceController from "../controllers/service.controller";
import { createServiceValidation } from "../middlewares/validation.mid";
import { Authorization } from "../middlewares/auth.mid";
const serviceRouter = express.Router();

const { create, findAll, enableAndDisableService, update, findServiceByOnwnerId} = serviceController

serviceRouter.post("/", Authorization, createServiceValidation, create);
serviceRouter.get("/", Authorization, findAll);
serviceRouter.put("/:serviceId", Authorization,  enableAndDisableService);
serviceRouter.put("/update/:serviceId", Authorization, createServiceValidation, update);
serviceRouter.get("/my-services", Authorization, findServiceByOnwnerId);

export default serviceRouter; 

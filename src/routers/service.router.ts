import express from "express";
import serviceController from "../controllers/service.controller";
import { createServiceValidation } from "../middlewares/validation.mid";
import { Authorization } from "../middlewares/auth.mid";
const serviceRouter = express.Router();

const { create } = serviceController

serviceRouter.post("/", Authorization, createServiceValidation, create);


export default serviceRouter; 

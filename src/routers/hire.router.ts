import express from "express";
import hireController from "../controllers/hire.controller";
import { createHireValidation } from "../middlewares/validation.mid";
import { Authorization } from "../middlewares/auth.mid";
const hireRouter = express.Router();

const { create } = hireController

hireRouter.post("/", Authorization, createHireValidation, create);

export default hireRouter; 

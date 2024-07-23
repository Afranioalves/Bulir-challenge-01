import express from "express";
import signInController from "../controllers/signIn.controller";
import { signInValidation } from "../middlewares/validation.mid";
const signInRouter = express.Router();


signInRouter.post("/", signInValidation, signInController);


export default signInRouter; 

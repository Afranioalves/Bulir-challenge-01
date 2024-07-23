import express from "express";
import userController from "../controllers/user.controller";
import { createUserValidation } from "../middlewares/validation.mid";
const userRouter = express.Router();


const { create } = userController;

userRouter.post("/", createUserValidation, create);


export default userRouter; 

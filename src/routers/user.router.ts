import express from "express";
import userController from "../controllers/user.controller";
import { createUserValidation } from "../middlewares/validation.mid";
import { Authorization } from "../middlewares/auth.mid";
const userRouter = express.Router();


const { create, becomeProvider } = userController;

userRouter.post("/", createUserValidation, create);
userRouter.put("/become-provider", Authorization, becomeProvider);


export default userRouter; 

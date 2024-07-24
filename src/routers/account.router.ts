import express from "express";
import accountController from "../controllers/account.controller";
import { topUpAccountValidation } from "../middlewares/validation.mid";
import { Authorization } from "../middlewares/auth.mid";
const accountRouter = express.Router();

const { topUpAccountBalance, seeBalance } = accountController

accountRouter.put("/", Authorization, topUpAccountValidation, topUpAccountBalance);
accountRouter.get("/", Authorization, seeBalance);
export default accountRouter; 

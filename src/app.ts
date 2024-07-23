import express, { NextFunction, Response, Request } from 'express'
import logger from "morgan"
import bodyParser from "body-parser";
import cors from "cors";
import database from './config/database';
import userRouter from './routers/user.router';
import signInRouter from './routers/signIn.router';


const prefix = '/api/v1'
const app = express()
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(`${prefix}/user`, userRouter);
app.use(`${prefix}/sign-in`, signInRouter);


app.use('/',(req:Request, res:Response)=>{
    res.status(200).send({
        title:'Bulir challenge 001', 
        api_version:'1.0.0', 
        author:'Afrânio Alves'
    })
})

database.sync()
.then(()=>{console.log("database connected successfully...")})
.catch((error)=>console.log("error to connect database...", error));



export default app
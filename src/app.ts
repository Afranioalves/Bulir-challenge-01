import express, { NextFunction, Response, Request,Errback } from 'express'
import logger from "morgan"
import bodyParser from "body-parser";
import cors from "cors";
import database from './config/database';
import userRouter from './routers/user.router';
import signInRouter from './routers/signIn.router';
import serviceRouter from './routers/service.router';
import hireRouter from './routers/hire.router';
import accountRouter from './routers/account.router';


const prefix = '/api/v1'
const app = express()
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use((err:Errback, req:Request, res:Response, next:NextFunction) => {
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({ error: 'Requisição invalida', message:'Insira um body valido para requisição' });
    }
    next();
  });


app.use(`${prefix}/user`, userRouter);
app.use(`${prefix}/sign-in`, signInRouter);
app.use(`${prefix}/service`, serviceRouter);
app.use(`${prefix}/hiring`, hireRouter);
app.use(`${prefix}/account`, accountRouter);



app.use(`${prefix}/home`,(req:Request, res:Response)=>{
    res.status(200).send({
        title:'Bulir challenge 001', 
        api_version:'1.0.0', 
        author:'Afrânio Alves'
    })
})

app.use('/',(req:Request, res:Response)=>{
    res.status(404).send({
        message:'resource not found', 
    })
})

database.sync()
.then(()=>{console.log("database connected successfully...")})
.catch((error)=>console.log("error to connect database...", error));



export default app
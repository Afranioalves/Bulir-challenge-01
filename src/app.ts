import express, { NextFunction, Response, Request } from 'express'
import logger from "morgan"
import bodyParser from "body-parser";
import cors from "cors";


const app = express()
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/',(req:Request, res:Response)=>{
    res.status(200).send({title:'Bulir challenge 001', api_version:'1.0.0', author:'Afrânio Alves'})
})



export default app
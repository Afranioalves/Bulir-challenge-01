import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const SECRET_KEY:any = process.env.JWT_SECRET_KEY

export const Authorization = (req:Request, res:Response, next:NextFunction)=>{
    try{
        const auth = req.headers.authorization
        if(!auth) return res.status(400).send({message:'Autorização obrigatória'}) 
        const token = auth.split(' ')[1]
        const decode = jwt.verify(token,SECRET_KEY);
        req.body.user = decode;
        next();
    }catch(error){
        res.status(401).send({message:"Sem autorização"})
    }

}
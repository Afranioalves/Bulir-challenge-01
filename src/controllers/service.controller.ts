import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import { serviceInput } from "../interfaces/service.interface";
import serviceRepository from "../repositories/service.repository";

const create = async (req: Request, res: Response) => {

    try {

        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).send({ message: error.array() });

        const {title, description, price} = req.body
        const serviceId = uuid()
        const {id, userType} = req.body.user;
        
        if(userType != "PRESTADOR") return res.status(401).send({error:'Sem permisão', message:'Actualize a sua conta para prestador'})
       
        const service: serviceInput = {
            id: serviceId,
            title,
            description,
            price,
            ownerId: id,
        }

        const result = await serviceRepository.create(service)
        console.log(result)
        res.status(201).send({message:'Serviço criado com sucesso'})

 
    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro ao criar serviços' });
    }

}

const serviceController = { create }
export default serviceController



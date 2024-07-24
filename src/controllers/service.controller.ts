import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import { serviceInput } from "../interfaces/service.interface";
import serviceRepository from "../repositories/service.repository";
import { serviceOrderOutput } from "../utils/order";

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

        await serviceRepository.create(service)
        res.status(201).send({message:'Serviço criado com sucesso'})

 
    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro ao criar serviços' });
    }

}


const findAll = async (req: Request, res: Response) => {

    try {
        const result = await serviceRepository.findAll()
        if(result.length == 0) res.status(404).send({message:'Nenhum serviço encontrado'})
        const content = serviceOrderOutput(result)
        res.status(200).send({size:result.length, content})

    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro ao criar serviços' });
    }

}

const serviceController = { create, findAll }
export default serviceController



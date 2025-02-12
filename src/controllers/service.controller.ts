import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import { serviceInput } from "../interfaces/service.interface";
import serviceRepository from "../repositories/service.repository";
import { serviceOnwerOrderOutput, serviceOrderOutput } from "../utils/order";
import { numberValidator } from "../libs/number-validator";
import userRepository from "../repositories/user.repository";

const create = async (req: Request, res: Response) => {

    try {

        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).send({ message: error.array() });

        const {title, description, price, category} = req.body
        const serviceId = uuid()
        const {id, userType} = req.body.user;

        const user = await userRepository.findUserById(id)
        if(user == null) return res.status(400).send({ error: "Usúario invalido", message: "Nenhum usúario encontrado para criar este serviço" });
        
        if(userType != "PRESTADOR") return res.status(401).send({error:'Sem permisão', message:'Actualize a sua conta para prestador'})
        
        if(!numberValidator(price)) return res.status(400).send({ error: "Preço invalido", message: "Insira um preço valido para esse serviço" });
        
        const service: serviceInput = {
            id: serviceId,
            title,
            description,
            price,
            ownerId: id,
            category,
            status:true
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
        if(result.length == 0) return res.status(404).send({message:'Nenhum serviço encontrado', content:[]})
        const content = serviceOrderOutput(result)
        res.status(200).send({total:result.length, content})

    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro ao carregar serviços' });
    }

}


const findServiceByOnwnerId = async (req: Request, res: Response) => {

    try {
        const {id, userType} = req.body.user;
        if(userType != "PRESTADOR") return res.status(401).send({error:'Sem permisão', message:'Tipo de conta não permite ter serviço'})
        const result = await serviceRepository.findServiceByOnwnerId(id)
        if(result.length == 0) return  res.status(404).send({message:'Nenhum serviço encontrado'})
        const content = serviceOnwerOrderOutput(result)
        res.status(200).send({total:result.length, services:content})

    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro ao carregar serviços' });
    }

}


const enableAndDisableService = async (req: Request, res: Response) => {

    try {
        const {id} = req.body.user;
        const {serviceId} = req.params
        const resultService = await serviceRepository.findServiceById(serviceId)
        if(resultService == null) return res.status(404).send({ error: "Serviço não encontrado", message: "Serviço que pretende excluir, não existe" });
        
        if(resultService.ownerId != id) return res.status(401).send({ error: "Sem autorização", message: "Não tens autorização para excluir este serviço" });
        const serviceStatus =  resultService.status;
        resultService.status = !resultService.status;
        await resultService.save();
        if(serviceStatus) return res.status(200).send({ message:'Serviço desactivado com sucesso'})
        if(!serviceStatus) return  res.status(200).send({ message:'Serviço activo com sucesso'})

     
    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro ao excluir serviços' });
    }

}


const update = async (req: Request, res: Response) => {

    try {
        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).send({ message: error.array() });

        const {title, description, price} = req.body
        const {serviceId} = req.params
        const {id, userType} = req.body.user;

        const resultService = await serviceRepository.findServiceById(serviceId)
        if(resultService == null) return res.status(404).send({ error: "Serviço não encontrado", message: "Serviço que pretende actualizar, não existe" });
        if(!numberValidator(price)) return res.status(400).send({ error: "Preço invalido", message: "Insira um preço valido para esse serviço" });
        if(resultService.ownerId != id) return res.status(401).send({ error: "Sem permissão", message: "Não tens permissão para actualizar este serviço" });
        const service =  resultService;
        service.title = title;
        service.description = description;
        service.price = price;
        await service.save();
        return res.status(200).send({ 
            message:'Serviço actualizado com sucesso', 
            service:{
               id:service.id,
               title,
               description,
               price,
            }
        })
    
     
    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro ao excluir serviços' });
    }

}



const serviceController = { create, findAll, enableAndDisableService, update, findServiceByOnwnerId}
export default serviceController



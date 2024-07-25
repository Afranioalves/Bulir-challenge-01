import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import serviceRepository from "../repositories/service.repository";
import hireRepository from "../repositories/hire.repository";
import userRepository from "../repositories/user.repository";
import accountRepository from "../repositories/account.repository";
import { hireInput } from "../interfaces/hire.interface";
import { hiringOrderOutput } from "../utils/order";

const create = async (req: Request, res: Response) => {

    try {

        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).send({ message: error.array() });

        const {providerId, serviceId} = req.body
        const {id} = req.body.user;
        const hireId = uuid()

        const resultProvider = await userRepository.findUserById(providerId)
        if(resultProvider == null) return res.status(400).send({ error: "Prestador invalido", message: "Insira um id valido do prestador" });

        const resultService = await serviceRepository.findServiceById(serviceId)
        if(resultService == null) return res.status(400).send({ error: "Serviço invalido", message: "Insira um id valido do serviço" });

        if(id == providerId) return res.status(400).send({ error: "Opereção invalida", message: "Não podes contractar o teu proprio serviço" });

        const accountCostumer = await accountRepository.findAcountByOwnerId(id)
        if(accountCostumer == null) return res.status(400).send({ error: "Conta Invalida", message: "Sem conta vinculada com os seus dados" });

        const accountProvider = await accountRepository.findAcountByOwnerId(providerId)
        if(accountProvider == null) return res.status(400).send({ error: "Conta Invalida", message: "Sem conta vinculada ao Prestador" });
        
        const balanceCostumer:number = accountCostumer.balance;
        const balanceProvider:number = accountProvider.balance;
        const servicePrice:number = resultService.price;

        if(+balanceCostumer < +servicePrice ) return res.status(400).send({ error: "Saldo insuficiente", message: "O teu saldo é insuficiente para este serviço, carregue a tua conta volte a tentar" });
        
        const hiring:hireInput = {
            id:hireId,
            serviceId:serviceId,
            costumerId:id,
            providerId:providerId,
            amount: servicePrice
        }
        
        await hireRepository.create(hiring)
        accountCostumer.balance = +balanceCostumer - +servicePrice;
        accountProvider.balance = +balanceProvider + +servicePrice;
        await accountProvider.save();
        await accountCostumer.save();
        
        res.status(201).send({
            message:'Serviço contratado com sucesso', 
            service:{
                service:resultService.title,
                price:servicePrice
            },
            provider:{
                name:resultProvider.fullName,
                email:resultProvider.email
            }
        })

 
    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro a contratar serviço' });
    }

}


const seeHires = async (req: Request, res: Response) => {

    try {
        const {id} = req.body.user;
        const resultHires = await hireRepository.findAll(id);
        if(resultHires.length == 0) return res.status(404).send({message:'Nenhuma contratação encontrado'})
        const content = hiringOrderOutput(resultHires)
        res.status(200).send({total:resultHires.length, content})

 
    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro a carregar contratação' });
    }

}


const hireController = { create, seeHires }
export default hireController



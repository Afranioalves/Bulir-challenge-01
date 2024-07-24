import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import accountRepository from "../repositories/account.repository";
import { numberValidator } from "../libs/number-validator";

const topUpAccountBalance = async (req: Request, res: Response) => {

    try {

        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).send({ message: error.array() });

        const {amount} = req.body
        const {id} = req.body.user;
        
        const accountResult = await accountRepository.findAcountByOwnerId(id);
        if(accountResult == null) return res.status(400).send({ error: "Conta invalida", message: "Sem conta vinculada a esse usúario" });

        if(!numberValidator(amount)) return res.status(400).send({ error: "Valor invalido", message: "Insira um valor valido para carregar a conta" });
        
        const currentBalance = accountResult.balance;
        accountResult.balance = +currentBalance + +amount;
        await accountResult.save();

        res.status(201).send({
            message:'Conta carregada com sucesso',
            account:{
                currentBalance:+currentBalance + +amount,
                oldBalance: currentBalance
            } 
           
        })

 
    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro a carregar a conta' });
    }

}


const seeBalance = async (req: Request, res: Response) => {

    try {

        const {id} = req.body.user;
        
        const accountResult = await accountRepository.findAcountByOwnerId(id);
        if(accountResult == null) return res.status(400).send({ error: "Conta invalida", message: "Sem conta vinculada a esse usúario" });

        res.status(200).send({
            message:'Dados carregada com sucesso',
            account:{
                balance:accountResult.balance,
            } 
           })

    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro a carregar a dados da conta' });
    }

}

const accountController = {topUpAccountBalance, seeBalance}

export default accountController



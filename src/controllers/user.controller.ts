import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import userRepository from "../repositories/user.repository";
import accountRepository from "../repositories/account.repository";
import { userInput } from "../interfaces/user.interface";
import { accountInput } from "../interfaces/account.interface";
import { validateUserData } from "../utils/validate-user-data";


const create = async (req: Request, res: Response) => {

    try {

        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).send({ message: error.array() });

        const { fullName, NIF, email, password, userType } = req.body
        validateUserData(req.body)

        const resultEmail = await userRepository.findUserByEmail(email);
        if (resultEmail != null) return res.status(400).send({ error: "Email indisponivel", message: "Insira um email diferente" });

        const resultNIF = await userRepository.findUserByNIF(NIF);
        if (resultNIF != null) return res.status(400).send({ error: "NIF indisponivel", message: "Insira um NIF diferente" });

        const userId = uuid()
        const accountId = uuid()

        const account: accountInput = {
            id: accountId,
            balance: 5000,
            ownerId: userId,
        }

        bcrypt.hash(password, 10, async (errBcrypt, hash) => {
            if (errBcrypt) return res.status(500).send({ message: errBcrypt });
            const user: userInput = {
                id: userId,
                fullName,
                NIF,
                email,
                password: hash,
                userType
            };

            await userRepository.create(user)
            await accountRepository.create(account)
            res.status(201).send({ message: "Cadastro feito com sucesso", content: { name: fullName, initial_balance: 5000 } })
        })



    } catch (error: any) {
        console.error('Erro no processamento:', error);
        res.status(error.status || 500).send({ error: error.error || error, message: error.message || 'Erro interno do servidor' });
    }

}


const becomeProvider = async (req: Request, res: Response) => {

    try {

        const {id, userType} = req.body.user;

        if(userType == "PRESTADOR") return res.status(400).send({error:'Já és um Prestador', message:'O usúario selecionado já é um Prestador'})

        const user = await userRepository.findUserById(id)
        if(user == null) return res.status(404).send({ error: "Usuário não invalido", message: "Nenhum usúario encontrado, para ser Prestador" });

        user.userType = "PRESTADOR"
        await user.save();
        res.status(200).send({
            message:'Tipo de usúario alterado com sucesso, de Cliente para Prestador',
            content:{
                name: user.fullName,
                userType: user.userType
            }
        })

    } catch (error) {
        console.error('Erro no processamento:', error);
        res.status(500).send({error, message:'Erro a mudar de conta' });
    }

}

const userController = { create, becomeProvider }

export default userController



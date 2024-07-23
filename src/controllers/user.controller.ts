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

const userController = { create }
export default userController



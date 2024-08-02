import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userRepository from "../repositories/user.repository";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY: any = process.env.JWT_SECRET_KEY;

const signInController = async (req: Request, res: Response, next: NextFunction) => {
    
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).send({ content: error.array() });

    const { email, password } = req.body;

    try {
        const result: any = await userRepository.findUserByEmail(email);
        if (result == null) return res.status(401).send({ message: "Email ou senha está errada" });
        const { id, userType, fullName, NIF } = result;
        const user ={id, userType, fullName, NIF, email}

        const match = await bcrypt.compare(password, result.password);
        if (!match) return res.status(401).send({ message: "Email ou senha está errada" });

        const token = jwt.sign({ id, userType }, SECRET_KEY, { expiresIn: "72h" });
        return res.status(200).send({ message: "Autenticado com sucesso", token, user});
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

export default signInController;

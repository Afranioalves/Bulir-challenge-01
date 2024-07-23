import {check} from "express-validator"


export const createUserValidation = [
    check('fullName').not().isEmpty().trim().escape().withMessage('campo fullName obrigatório'),
    check('NIF').not().isEmpty().trim().escape().withMessage('campo NIF obrigatório'),
    check('email').not().isEmpty().trim().escape().withMessage('campo email obrigatório'),
    check('password').not().isEmpty().trim().escape().withMessage('campo password obrigatório'),
    check('userType').not().isEmpty().trim().escape().withMessage('campo userType obrigatório'),
    
]


export const signInValidation = [
    check('email').not().isEmpty().trim().escape().withMessage('campo email obrigatório'),
    check('password').not().isEmpty().trim().escape().withMessage('campo password obrigatório'), 
]
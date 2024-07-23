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


export const createServiceValidation = [
    check('title').not().isEmpty().trim().escape().withMessage('campo title obrigatório'),
    check('description').not().isEmpty().trim().escape().withMessage('campo description obrigatório'),
    check('price').not().isEmpty().trim().escape().withMessage('campo price obrigatório'), 
]
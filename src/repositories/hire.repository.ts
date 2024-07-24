import Models from "../models";
import { hireInput } from '../interfaces/hire.interface';
import { Op } from "sequelize";


const create = async (hiring:hireInput) => await Models.hires.create(hiring);

const findAll = async (userId:string) => await Models.hires.findAll({
    where :{[Op.or]:[{providerId:userId},{costumerId: userId}]},
    attributes:['id','amount','createdAt'],
    include: [
    { model: Models.services, as: 'service', attributes:['title']},
    { model: Models.users, as:'provider', attributes:['fullName']},
    { model: Models.users, as:'costumer', attributes:['fullName']},
  
  ]});

const hireRepository = { create, findAll };

export default hireRepository
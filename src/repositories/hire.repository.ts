import Models from "../models";
import { hireInput } from '../interfaces/hire.interface';


const create = async (transaction:hireInput) => await Models.hires.create(transaction);
const findAll = async () => await Models.hires.findAll();

const transactionRepository = { create, findAll };

export default transactionRepository
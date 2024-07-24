import Models from "../models";
import { hireInput } from '../interfaces/hire.interface';


const create = async (transaction:hireInput) => await Models.transactions.create(transaction);

const transactionRepository = { create }

export default transactionRepository
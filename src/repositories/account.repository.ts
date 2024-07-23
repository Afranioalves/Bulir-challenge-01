import Models from "../models";
import { accountInput } from "../interfaces/account.interface";

const create = async (account:accountInput) => await Models.accounts.create(account);

const accountRepository = { create }
export default accountRepository
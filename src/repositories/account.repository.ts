import Models from "../models";
import { accountInput } from "../interfaces/account.interface";

const create = async (account:accountInput) => await Models.accounts.create(account);
const findAcountByOwnerId = async (ownerId: string) =>await Models.accounts.findOne({ where: { ownerId } });

const accountRepository = { create, findAcountByOwnerId }
export default accountRepository
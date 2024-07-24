import Models from "../models";
import { userInput } from "../interfaces/user.interface";

const create = async (user:userInput) => await Models.users.create(user);
const findUserByEmail = async (email: string) =>await Models.users.findOne({ where: { email } });
const findUserByNIF = async (NIF: string) =>await Models.users.findOne({ where: { NIF } });
const findUserById = async (id: string) =>await Models.users.findByPk(id);

const userRepository = { create, findUserByEmail, findUserByNIF, findUserById}
export default userRepository
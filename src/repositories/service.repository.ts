import Models from "../models";
import { serviceInput } from "../interfaces/service.interface";

const create = async (service:serviceInput) => await Models.services.create(service);
const findAll = async () => await Models.services.findAll({where:{status:true}, include:Models.users});
const findServiceById = async (id:string) => await Models.services.findByPk(id);

const serviceRepository = { create, findAll, findServiceById}

export default serviceRepository
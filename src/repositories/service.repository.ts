import Models from "../models";
import { serviceInput } from "../interfaces/service.interface";

const create = async (service:serviceInput) => await Models.services.create(service);

const serviceRepository = { create }

export default serviceRepository
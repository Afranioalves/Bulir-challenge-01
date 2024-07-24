import { Model, InferAttributes, InferCreationAttributes} from "sequelize";

export interface hireSchema extends Model <InferAttributes<hireSchema>, InferCreationAttributes<hireSchema>>{
    id:string,
    serviceId:string
    costumerId: string,
    providerId:string,
    amount:number,
    
}

export interface hireInput{
    id:string,
    serviceId:string
    costumerId: string,
    providerId:string,
    amount:number,
}
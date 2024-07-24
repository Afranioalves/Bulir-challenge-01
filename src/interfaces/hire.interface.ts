import { Model, InferAttributes, InferCreationAttributes} from "sequelize";

export interface transactionSchema extends Model <InferAttributes<transactionSchema>, InferCreationAttributes<transactionSchema>>{
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
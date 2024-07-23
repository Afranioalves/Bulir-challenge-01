import { Model, InferAttributes, InferCreationAttributes} from "sequelize";

export interface accountSchema extends Model <InferAttributes<accountSchema>, InferCreationAttributes<accountSchema>>{
    id:string,
    balance: number,
    ownerId: string,
}

export interface accountInput{
    id:string,
    balance: number,
    ownerId: string,
}
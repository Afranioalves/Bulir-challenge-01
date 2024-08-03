import { Model, InferAttributes, InferCreationAttributes} from "sequelize";

export interface serviceSchema extends Model <InferAttributes<serviceSchema>, InferCreationAttributes<serviceSchema>>{
    id:string,
    title:string
    description: string,
    category: string,
    price:number,
    ownerId: string,
    status:boolean,
}

export interface serviceInput{
    id:string,
    title:string
    description: string,
    category: string,
    price:number,
    ownerId: string,
    status:boolean,
}
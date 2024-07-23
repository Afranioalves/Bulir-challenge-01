import { Model, InferAttributes, InferCreationAttributes} from "sequelize";

export interface userSchema extends Model <InferAttributes<userSchema>, InferCreationAttributes<userSchema>>{
    id:string,
    fullName: string,
    NIF: string,
    email: string,
    password: string,
    userType:string,
}

export interface userInput{
    id:string,
    fullName: string,
    NIF: string,
    email: string,
    password: string,
    userType:string,
}
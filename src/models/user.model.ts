import Sequelize from "sequelize";
import database from "../config/database";
import { userSchema } from "../interfaces/user.interface";

const users = database.define<userSchema>("users",{
    id:{
        type:Sequelize.STRING(400), 
        autoIncrement: false,
        allowNull: false,
        primaryKey:true,
    },
    fullName:{
        type:Sequelize.STRING(400),
        allowNull: false, 
    },
    email:{
        type:Sequelize.STRING(200),
        allowNull: false,
        unique: true, 
    },
    NIF:{
        type:Sequelize.STRING(50),
        allowNull: true,
        unique: true, 
    },
    password:{
        type:Sequelize.STRING(400),
        allowNull: true, 
    },
    userType:{
        type: Sequelize.ENUM('PRESTADOR','CLIENTE'),
        allowNull:true,
    }
})


export default users
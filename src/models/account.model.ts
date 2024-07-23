import Sequelize from "sequelize";
import database from "../config/database";
import { accountSchema } from "../interfaces/account.interface";

const accounts = database.define<accountSchema>("accounts",{
    id:{
        type:Sequelize.STRING(400), 
        autoIncrement: false,
        allowNull: false,
        primaryKey:true,
    },
    balance:{
        type:Sequelize.DECIMAL(10,2),
        allowNull: false, 
    },
    ownerId:{
        type:Sequelize.STRING(400),
        allowNull: false,
    }
})


export default accounts
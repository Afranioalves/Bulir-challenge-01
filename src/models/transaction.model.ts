import Sequelize from "sequelize";
import database from "../config/database";
import { transactionSchema } from "../interfaces/hire.interface";

const transactions = database.define<transactionSchema>("transactions",{
    id:{
        type:Sequelize.STRING(400), 
        autoIncrement: false,
        allowNull: false,
        primaryKey:true,
    },
    serviceId:{
        type:Sequelize.STRING(400), 
        allowNull: false, 
    },
    costumerId:{
        type:Sequelize.STRING(400), 
        allowNull: false, 
    },
    providerId:{
        type:Sequelize.STRING(400), 
        allowNull: false, 
    },
    amount:{
        type:Sequelize.DECIMAL(10,2),
        allowNull: false,
    }
})


export default transactions
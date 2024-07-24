import Sequelize from "sequelize";
import database from "../config/database";
import { hireSchema } from "../interfaces/hire.interface";

const hires = database.define<hireSchema>("hires",{
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


export default hires
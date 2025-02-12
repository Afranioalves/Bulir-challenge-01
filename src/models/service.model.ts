import Sequelize from "sequelize";
import database from "../config/database";
import { serviceSchema } from "../interfaces/service.interface";

const services = database.define<serviceSchema>("services",{
    id:{
        type:Sequelize.STRING(400), 
        autoIncrement: false,
        allowNull: false,
        primaryKey:true,
    },
    title:{
        type:Sequelize.STRING(200), 
        allowNull: false, 
    },
    description:{
        type:Sequelize.STRING(500), 
        allowNull: false, 
    },
    category:{
        type:Sequelize.STRING(200), 
        allowNull: false, 
    },
    price:{
        type:Sequelize.DECIMAL(10,2),
        allowNull: false, 
    },
    ownerId:{
        type:Sequelize.STRING(400),
        allowNull: false,
    },
    status:{
        type:Sequelize.BOOLEAN,
        allowNull: false,
    }
})


export default services
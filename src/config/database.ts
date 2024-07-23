import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const DATABASE_NAME: any = process.env.DATABASE_NAME
const DATABASE_USER: any = process.env.DATABASE_USER
const DATABASE_PASSWORD: any = process.env.DATABASE_PASSWORD
const DATABASE_HOST: any = process.env.DATABASE_HOST
const DATABASE_PORT: any = process.env.DATABASE_PORT
const DATABASE_DIALECT: any = process.env.DATABASE_DIALECT

const database = new Sequelize(
    DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD,
    {
        dialect: DATABASE_DIALECT,
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        logging:false
    },
)


export default database;
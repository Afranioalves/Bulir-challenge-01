import http from 'http'
import app from './app';
import dotenv from "dotenv"
dotenv.config()

const port = process.env.SERVER_PORT;
const server = http.createServer(app);
const listen = server.listen(port, ()=>console.log(`server running in http:localhost:${port}`));
process.on('SIGINT',()=>{
    listen.close()
    console.log("server stopped")
});
import express from 'express'
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketController } from './sockets/controller.js';


class Servidor{
    
    constructor(){
        //constantes
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = new Server(this.server);      // Socket.io: Servidor de sockets

        this.Path   = {};

        // Constructores //

        //middlewares
        this. middlewares();
        //rutas de la aplicacion
        this.routes();
        //sockets
        this.sockets();
    };
    
    
    middlewares(){
        this.app.use(cors());       // <--- ayuda a controlar el intercambio de recursos HTTP (evita errores cross domain acces)
        //directorio publico
        this.app.use(express.static('public'))
    };
    
    //rutas
    routes(){
        // this.app.use(this.usuariosPath, router)
    };

    //sockets: Configuraciones DESDE EL SERVER
    sockets(){
        this.io.on('connection', socketController);
    };

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Listening on port ${this.port}`)
        })
    };

};

export {
    Servidor
}
import * as express from 'express';
import * as socketIo from 'socket.io';
import { SocketServer } from './socket-server';
import * as http from 'http';
import * as path from 'path';

export default class Server{
    private app;
    private port: number;
    private server;
    private socketServer = new SocketServer();
    private io;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.server = http.createServer( this.app );
        this.io = socketIo(  this.server, {
            path: '/socket.io'
        });
    }

    start(){
        this.configureApp();
        this.socketServer.connect(this.io);
        this.server.listen(this.port,() => {

            let host = this.server.address().address;
            let port = this.server.address().port;

            console.log("Server running at http://%s:%s", host, port)

        });
    }

    configureApp(){

        this.app.use('/', express.static(path.join(__dirname, '..', 'public' )));
        this.app.use('/public', express.static(path.join(__dirname, '..', 'public' )));
        this.app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules' )));

    }
}


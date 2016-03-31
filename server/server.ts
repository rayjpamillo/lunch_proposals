import express = require('express');
import path = require('path');

export default class Server{
    private app;
    private port: number;
    private server;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
    }

    start(){
        this.configureApp();
        this.server = this.app.listen(this.port,() => {

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


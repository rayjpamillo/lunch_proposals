import express = require('express');

export default class Server{
    private app;
    private port: number;
    private server;

    constructor(){
        this.app = express();
        this.port = 3000;
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
        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.send('Lunch Proposals App Server Test...');
        });
    }
}


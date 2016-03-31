import {LunchProposal} from "../public/src/lunch-proposal";

export class SocketServer {

    lunchProposal: LunchProposal[];

    constructor() {
        this.lunchProposal = [];
    }

    connect( io ) {
        io.on('connection', (socket) => {
            socket.on('addedProposal', (data) => {
                this.lunchProposal.push(data);
                console.log(data);
            });
        });
    }

}
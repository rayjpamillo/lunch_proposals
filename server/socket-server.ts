import {LunchProposal} from "../public/src/lunch-proposal";

export class SocketServer {

    lunchProposals: LunchProposal[];
    user: string;

    constructor() {
        this.lunchProposals = [];
    }

    connect( io ) {
        io.on('connection', (socket) => {
            socket.on('addedProposal', (data) => {
                data.user = this.user;
                data.voters.push(this.user);
                this.lunchProposals.push(data);
            });
            socket.on('onLogin', (data) => {
                this.user = data;
            });
        });
    }

}
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
                let isDuplicate = false;
                for ( let lunchProposal of this.lunchProposals )
                {
                    if( lunchProposal.time === data.time &&
                        lunchProposal.place === data.place ) {
                        socket.emit( 'existingProposal');
                        isDuplicate = true;
                    }
                }
                if(!isDuplicate)
                {
                    data.user = this.user;
                    data.voters.push(this.user);
                    this.lunchProposals.push(data);
                }
            });
            socket.on('onLogin', (data) => {
                this.user = data;
                console.log('Logging in');
            });
            socket.on('onLogout', () => {
                this.user = null;
                console.log('Logout successs');
            });
        });
    }

}
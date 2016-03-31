import {LunchProposal} from "../public/src/lunch-proposal";

export class SocketServer {

    lunchProposals: LunchProposal[];

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
                    this.lunchProposals.push(data);
                    console.log(data);
                }
            });
        });
    }

}
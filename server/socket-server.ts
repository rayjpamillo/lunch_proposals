import {LunchProposal} from "../public/src/lunch-proposal";
import SortUtil from "./sort-util";

export class SocketServer {

    lunchProposals: LunchProposal[];
    lunchProposalsDummy;
    user: string;
    sortUtil: SortUtil;

    constructor() {
        this.lunchProposals = [];
        this.lunchProposalsDummy = [new LunchProposal("14:00","Alpha","user","Mcdo",[]),
            new LunchProposal("11:00","Beta","user","Jollibee",[]),
            new LunchProposal("10:00","Charlie","user","KFC",[]),
            new LunchProposal("12:00","Echo","user","Vikings",[])
        ]
        this.sortUtil = new SortUtil();
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
                    socket.emit('proposalList', this.lunchProposals);
                }
            });
            socket.on('getProposals', (data) => {
                socket.emit('proposalList', this.lunchProposals);
            });
        });
    }

    sortByTime(arr){
        return this.sortUtil.sortObjectArrayByKey(arr, "time");
    }

}
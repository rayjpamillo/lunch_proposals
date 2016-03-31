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
                data.user = this.user;
                data.voters.push(this.user);
                this.lunchProposals.push(data);
                socket.emit('proposalList', this.lunchProposals);
            });
            socket.on('onLogin', (data) => {
                this.user = data;
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
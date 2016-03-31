import { Component } from 'angular2/core';
import { SocketHandler } from '../socket-handler/socket-handler';

@Component({
selector: 'proposal-list',
templateUrl: 'public/src/proposal-list/proposal-list.component.html'
})

export class ProposalListComponent {

    proposals;

    constructor(private _socketHandler:SocketHandler){
        this.proposals = [];

        this._socketHandler.getSocket().emit('getProposals',null);
        this._socketHandler.getSocket().on('proposalList',(data) => {
            this.proposals = data;
        });
    }

 }

import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import { LunchProposal } from '../lunch-proposal';
import { SocketHandler } from '../socket-handler/socket-handler';

@Component({
    selector: 'proposal-form',
    templateUrl: 'public/src/proposal-form/proposal-form.component.html'
})

export class ProposalFormComponent{
    constructor( private _socketHandler:SocketHandler, private _router: Router ) { }

    model = new LunchProposal( '', '', '', '', [] );

    onSubmit(model:LunchProposal) {
        this._socketHandler.getSocket().emit("addedProposal", model);
        console.log(model);
    }

}
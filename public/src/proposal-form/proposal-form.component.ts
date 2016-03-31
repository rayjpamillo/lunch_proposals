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

    isExisting = false;

    onSubmit(model:LunchProposal) {
        this.isExisting = false;
        this._socketHandler.getSocket().emit('addedProposal', model);
        this._socketHandler.getSocket().on('existingProposal', () => {
            this.isExisting = true;
        });
        console.log(model);
    }

}
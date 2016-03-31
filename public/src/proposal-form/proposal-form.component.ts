import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import { LunchProposal } from '../lunch-proposal';

@Component({
    selector: 'proposal-form',
    templateUrl: 'public/src/proposal-form/proposal-form.component.html'
})

export class ProposalFormComponent{
    constructor( private _router: Router ) { }

    model = new LunchProposal( '', '', '', '', [] );

    onSubmit(model:LunchProposal) {
        console.log(model);
        this._router.navigate(['Login']);
    }

}
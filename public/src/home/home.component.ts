import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProposalFormComponent } from '../proposal-form/proposal-form.component';
import { ProposalListComponent } from '../proposal-list/proposal-list.component';

@Component({
    selector: 'home',
    templateUrl: 'public/src/home/home.component.html',
    directives: [NavbarComponent, ProposalFormComponent, ProposalListComponent]
})

export class HomeComponent{
    constructor( private _router: Router ) { }

    ngOnInit() { }

}
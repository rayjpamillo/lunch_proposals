import {Component} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'public/src/navbar/navbar.component.html'
})

export class NavbarComponent{
    username: string;
    constructor( private _router: Router, private params: RouteParams ) {
        this.username = this.params.get('user');
     }

    goToLoginPage() {
        this._router.navigate(['Login']);
    }
}
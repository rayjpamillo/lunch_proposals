import {Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'public/src/navbar/navbar.component.html'
})

export class NavbarComponent{
    constructor( private _router: Router ) { }

    goToLoginPage() {
        this._router.navigate(['Login']);
    }
}
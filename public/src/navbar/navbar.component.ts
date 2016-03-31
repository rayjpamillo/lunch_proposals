import {Component} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { SocketHandler } from '../socket-handler/socket-handler';

@Component({
    selector: 'navbar',
    templateUrl: 'public/src/navbar/navbar.component.html'
})

export class NavbarComponent{
    username: string;
    constructor( private _router: Router, private params: RouteParams, private _socketHandler:SocketHandler ) {
        this.username = this.params.get('user');
     }

    goToLoginPage() {
        this._socketHandler.getSocket().emit('onLogout');
        this._router.navigate(['Login']);
    }
}
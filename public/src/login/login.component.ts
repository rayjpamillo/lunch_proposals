import { Component, OnInit } from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import { SocketHandler } from '../socket-handler/socket-handler';

@Component({
    selector: 'login-form',
    templateUrl: 'public/src/login/login.component.html'
})

export class LoginComponent {
    submitted = false;
    notice = "You are about to access a private system. This system is for the use of authorized users only. All connections are logged. Any unauthorized access or attempts may be punished to the fullest extent possible under the applicable local legislation.";
    username;
    
    constructor(private _socketHandler:SocketHandler, private router: Router){
    }
    
    onSubmit(){
        console.log(this.username);
        window.localStorage['user'] = this.username;
        let self = this;
        this.submitted = true;
        setTimeout(function(){
            self.router.navigate(['Home', {user: this.username.value}]);
         }, 3000);
         
    }
}
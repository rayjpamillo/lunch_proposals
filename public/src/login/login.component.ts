import { Component, OnInit } from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'login-form',
    templateUrl: 'public/src/login/login.component.html'
})

export class LoginComponent {
    submitted = false;
    notice = "You are about to access a private system. This system is for the use of authorized users only. All connections are logged. Any unauthorized access or attempts may be punished to the fullest extent possible under the applicable local legislation.";
    
    constructor(private router: Router){
        
    }
    
    onSubmit(){
        let self = this;
        this.submitted = true;
        setTimeout(function(){
            self.router.navigate(['Home']);  
         }, 3000);
         
    }
}
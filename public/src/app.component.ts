import { Component } from 'angular2/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { SocketHandler } from './socket-handler/socket-handler';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ SocketHandler ]
})

@RouteConfig([
  {path:'/lunchApp/login', name: 'Login', component: LoginComponent, useAsDefault: true},
  {path:'/lunchApp/home', name: 'Home', component: HomeComponent}
])

export class AppComponent {
    constructor( private _socketHandler:SocketHandler ){

    }
}

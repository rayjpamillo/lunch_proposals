import { Component } from 'angular2/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/login', name: 'Login', component: LoginComponent, useAsDefault: true},
  {path:'/home', name: 'Home', component: HomeComponent}
])

export class AppComponent { }
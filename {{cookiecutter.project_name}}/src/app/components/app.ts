/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HomeViewComponent } from '../views/home';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'iod-app',
  pipes: [ ],
  providers: [ ],
  directives: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <md-content>
        <md-toolbar style="background-color: DeepSkyBlue;">

            <!--<span routerLinkActive="active">
            <a routerLink="/home">
                Home
            </a>
            </span>-->

            <a md-button [routerLink]=" ['/'] ">
                Index
            </a>
            <a md-button [routerLink]=" ['/home'] ">
                Home
            </a>
            <a md-button [routerLink]=" ['/about'] ">
                About
            </a>

        </md-toolbar>

        <router-outlet></router-outlet>
    </md-content>
  `
})
export class AppComponent implements OnInit {
  loading = false;
  name = '{{cookiecutter.project_name}}';

  constructor() {

  }

  ngOnInit() {
    console.log('Initial App ...');
  }

}

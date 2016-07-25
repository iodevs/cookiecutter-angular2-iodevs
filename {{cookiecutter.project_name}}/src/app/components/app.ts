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
    <span routerLinkActive="active">
      <a routerLink="/">
        Index
      </a>
    </span>
    <span routerLinkActive="active">
      <a routerLink="/home">
        Home
      </a>
    </span>
    <span routerLinkActive="active">
      <a routerLink="/about">
        About
      </a>
    </span>

    <main>
      <router-outlet></router-outlet>
    </main>
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

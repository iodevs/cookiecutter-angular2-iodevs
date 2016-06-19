/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { HomeViewComponent } from '../views/home';
import { RouterActiveDirective } from '../directives/router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'iod-app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActiveDirective ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <span router-active>
      <button [routerLink]=" ['Index'] ">
        Index
      </button>
    </span>
    <span router-active>
      <button [routerLink]=" ['Home'] ">
        Home
      </button>
    </span>
    <span router-active>
      <button [routerLink]=" ['About'] ">
        About
      </button>
    </span>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: HomeViewComponent, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: HomeViewComponent },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  {
      path: '/about',
      name: 'About',
      loader: () => require('es6-promise!../views/about')('AboutViewComponent')
  }
])
export class AppComponent implements OnInit {
  loading = false;
  name = '{{cookiecutter.project_name}}';

  constructor() {

  }

  ngOnInit() {
    console.log('Initial App ...');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

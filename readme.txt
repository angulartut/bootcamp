basic checks
============
node -v
npm -v
ng --version


Create new project 
==================

ng new bootcamp --routing  --style=scss
ng serve -o 

update to latest angular
=====
ng update @angular/cli @angular/core

install bootstrap 4
====================
https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
ng add ngx-bootstrap
ng add ngx-bootstrap  --component componentName

ng add will use your package manager to download dependencies for ngx-bootstrap and invoke an installation script (implemented as a schematic) which will update your project and add additional dependencies (e.g. styles)

List of possible commands for adding appropriate component
ng add ngx-bootstrap  --component accordion
ng add ngx-bootstrap  --component alerts
ng add ngx-bootstrap  --component buttons
ng add ngx-bootstrap  --component carousel
ng add ngx-bootstrap  --component collapse
ng add ngx-bootstrap  --component datepicker
ng add ngx-bootstrap  --component dropdowns
ng add ngx-bootstrap  --component modals
ng add ngx-bootstrap  --component pagination
ng add ngx-bootstrap  --component popover
ng add ngx-bootstrap  --component progressbar
ng add ngx-bootstrap  --component rating
ng add ngx-bootstrap  --component sortable
ng add ngx-bootstrap  --component tabs
ng add ngx-bootstrap  --component timepicker
ng add ngx-bootstrap  --component tooltip
ng add ngx-bootstrap  --component typeahead


how to use 
===========
https://valor-software.com/ngx-bootstrap/#/documentation

create components 
================
ng g c home
ng g c about
ng g c about-me
ng g c about-us
ng g c page-not-found


Adding routes
===============
inside app-routing.module.ts update routes

const routes: Routes = [
  { path:'' , redirectTo:'/home', pathMatch:'full' },
  { path:'home' , component: HomeComponent },
  {
    path:'about' ,
    component: AboutComponent ,
    children: [
      { path: 'me', component: AboutMeComponent },
      { path: 'us', component: AboutUsComponent },
      { path: '**', redirectTo: '/about', pathMatch: 'full' }
    ]
  },
  { path:'**' , component: PageNotFoundComponent },
];

use <router-outlet></router-outlet>


  <a class="nav-link" [routerLink]="['/about/us']" >About </a>


Simplify routes
==============
use ng for
<li *ngFor="let route of routes" class="nav-item "  routerLinkActive="active">
        <a class="nav-link" [routerLink]="[route.link]" >{{route.name}} </a>
      </li>   

routes=[
    {name:'Home', link:'/home'},
    {name:'About', link:'/about'},
    {name:'About Me', link:'/about/me'},
    {name:'About Us', link:'/about/us'},
    {name:'Foo', link:'/foo'} 
  ];


one way data binding
=====================
export class AppComponent {
  title = 'bootcamp';
  searchText = "Initial search text"

<input class="form-control mr-sm-2" type="search" [value]="searchText" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search {{searchText}}</button>


two way data binding
=====================
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [... 
  ],
  imports: [
    FormsModule,

then use ngModel

[(ngModel)] banana in a box

you MUST include a name
https://stackoverflow.com/questions/47069944/if-ngmodel-is-used-within-a-form-tag-set-name-or-set-standalone-error?rq=1
 <input class="form-control mr-sm-2" name="search" type="search" [(ngModel)]="searchText" placeholder="Search" aria-label="Search">
 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search {{searchText}}</button>




creating modules - when you create modules, you must export the components
===============
->>>ng g module smple
use prefix <---
->>>ng g c sample/boom
what it does ?

import { BoomComponent } from './boom/boom.component';

@NgModule({
  declarations: [BoomComponent],

->>> and then export the module from the sample module

import { BoomComponent } from './boom/boom.component';

@NgModule({
  declarations: [BoomComponent],
  exports:[
    BoomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SampleModule { }

->>> and in the main moduel do

import { SampleModule } from './sample/sample.module';

@NgModule({
  declarations: [.... 
  ],
  imports: [
    SampleModule,




exercise (use the above module) seta  route 
=======

import { BoomComponent } from './sample/boom/boom.component';

const routes: Routes = [
  { path:'' , redirectTo:'/home', pathMatch:'full' },
  { path:'home' , component: HomeComponent },
  { path:'boom' , component: BoomComponent },

interpolation
=============
title: string;
  summary: string;
  constructor() { }

  ngOnInit() {
    this.title = "Blog Title";
    this.summary = "Blog Summary";
  }

    <h6 class="card-title">{{title}}</h6>
    <p class="card-text">{{summary}}</p>

passing attribute
=================
  @Input() title: string;
  @Input()summary: string;
OR

  @Input('title') title: string;
  @Input('summary') summary: string;


<app-blog-post-tile title="blog Title" summary="Summary 1"></app-blog-post-tile>

passing instances / via creating class
=================
ng g class blog-post

export class BlogPost {
    constructor(public title:string, public summary : string){}
}

that is typescript constructor construct

in child ===
  @Input() post: BlogPost;

  <h6 class="card-title">{{post.title}}</h6>
  <p class="card-text">{{post.summary}}</p>

in parent =====
  blogPosts: BlogPost[] =[]
  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost("Some title1", "Some Summary1"));
    this.blogPosts.push(new BlogPost("Some title2", "Some Summary2"));


<app-blog-post-tile *ngFor="let post of blogPosts" [post]="post"></app-blog-post-tile>


createing pipe
===============
ng g pipe truncate

@Pipe({ tells agular its a pipe

   <p class="card-text">{{post.summary | truncate : [30]}}</p>

export class TruncatePipe implements PipeTransform {
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}

pipe as a function just like a service
==================

add pipe to provider in ng module so we cn di it
 providers: [TruncatePipe],

then DI it into the component

 
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.post.summary = this.truncatePipe.transform(this.post.summary,30);
  }




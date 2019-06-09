import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp';
  searchText = "Initial search text"
  routes=[
    {name:'Home', link:'/home'},
    {name:'About', link:'/about'},
    {name:'About Me', link:'/about/me'},
    {name:'About Us', link:'/about/us'},
    {name:'Foo', link:'/foo'} 
  ];
}

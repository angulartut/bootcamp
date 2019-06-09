import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

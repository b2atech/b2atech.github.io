import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavLinksComponent } from './fav-links/fav-links.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "links", component: FavLinksComponent },
  { path: "", component: HomeComponent ,pathMatch:"full" },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavLinksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    bootstrap: [AppComponent]
    
})
export class AppModule {
  constructor(router: Router){

  }
 }

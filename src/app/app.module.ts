import { MyCategoryComponent } from './my-category/my-category.component';
import { Products } from './Products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbApiService } from './services/db-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from './Login/login/login.component';
import { BostsComponent } from './bosts/bosts/bosts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactivesloginComponent } from './login/reactiveslogin/reactiveslogin.component';


@NgModule({
  declarations: [
    AppComponent,
    Products,
    MyCategoryComponent,
    Login,
    BostsComponent,
    NavBarComponent,
    HomeComponent,
    ReactivesloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule
    
  ],
  providers: [
    DbApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

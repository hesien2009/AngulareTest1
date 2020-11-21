
import { Login } from './Login/login/login.component';
import { HomeComponent } from './home/home.component';
import { BostsComponent } from './bosts/bosts/bosts.component';
import { MyCategoryComponent } from './my-category/my-category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivesloginComponent } from './login/reactiveslogin/reactiveslogin.component';

const routes: Routes = [
  {path:'my-category',component:MyCategoryComponent},
  {path:'bosts/bosts',component:BostsComponent},
  {path:'home',component:HomeComponent},
  {path:'Login/login',component:Login},
  {path:'Login/reactiveslogin',component:ReactivesloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

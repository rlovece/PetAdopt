import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { LandingComponent } from './modules/landing/components/landing/landing.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path:'**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

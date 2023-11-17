import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shares/pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactoComponent } from './modules/landing/components/contacto/contacto.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [LoginGuard]
  },
  {
    path:'admin',
    loadChildren: () => import('./modules/administracion/administracion.module').then(m => m.AdministracionModule),
    canActivate: [AuthGuard]
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

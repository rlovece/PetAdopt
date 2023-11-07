import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAdministracionComponent } from './pages/panel-administracion/panel-administracion.component';

const routes: Routes = [
  {
    path: '',
    component: PanelAdministracionComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

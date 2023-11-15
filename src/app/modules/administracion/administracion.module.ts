import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PanelAdministracionComponent } from './pages/panel-administracion/panel-administracion.component';
import { ListadosMascotasComponent } from './listados/listados-mascotas/listados-mascotas.component';
import { MascotasModule } from '../mascotas/mascotas.module';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { GestionMascotasComponent } from './gestion/gestion-mascotas/gestion-mascotas.component';
import { GestionSolicitudesComponent } from './gestion/gestion-solicitudes/gestion-solicitudes.component';
import { ListadoSolicitudesComponent } from './listados/listado-solicitudes/listado-solicitudes.component';
import { ListadosUsuariosComponent } from './listados/listados-usuarios/listados-usuarios.component';
import { GestionUsuariosComponent } from './gestion/gestion-usuarios/gestion-usuarios.component';
import { UsuariosModule } from '../usuarios/usuarios.module';

@NgModule({
    declarations: [
        PanelAdministracionComponent,
        ListadosMascotasComponent,
        NavAdminComponent,
        GestionMascotasComponent,
        GestionSolicitudesComponent,
        ListadoSolicitudesComponent,
        ListadosUsuariosComponent,
        GestionUsuariosComponent,
    ],
    exports: [
        ListadosMascotasComponent,
        ListadosUsuariosComponent,
    ],
    imports: [
        CommonModule,
        AdministracionRoutingModule,
        MascotasModule,
        UsuariosModule,
    ]

})
export class AdministracionModule { }

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
import { GestionComentariosComponent } from './gestion/gestion-comentarios/gestion-comentarios.component';
import { ListadoComentariosComponent } from './listados/listado-comentarios/listado-comentarios.component';
import { SharesModule } from "../../shares/shares.module";
import { GestionAdoptantesComponent } from './gestion/gestion-adoptantes/gestion-adoptantes.component';
import { ListadosAdoptantesComponent } from './listados/listados-adoptantes/listados-adoptantes.component';
import { AdoptantesModule } from '../adoptantes/adoptantes.module';

@NgModule({
    declarations: [
        PanelAdministracionComponent,
        ListadosMascotasComponent,
        ListadosAdoptantesComponent,
        NavAdminComponent,
        GestionMascotasComponent,
        GestionSolicitudesComponent,
        GestionAdoptantesComponent,
        ListadoSolicitudesComponent,
        ListadosUsuariosComponent,
        GestionUsuariosComponent,
        GestionComentariosComponent,
        ListadoComentariosComponent,
    ],
    exports: [
        ListadosMascotasComponent,
        ListadosUsuariosComponent,
        ListadosAdoptantesComponent
    ],
    imports: [
        CommonModule,
        AdministracionRoutingModule,
        MascotasModule,
        UsuariosModule,
        SharesModule,
        AdoptantesModule
    ]
})
export class AdministracionModule { }

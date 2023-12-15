import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagenComponent } from './components/imagen/imagen.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { EditMascotaComponent } from './components/edit-mascota/edit-mascota.component';
import { SolicitarAdopcionComponent } from './components/solicitar-adopcion/solicitar-adopcion.component';
import { EditSolicitudComponent } from './components/edit-solicitud/edit-solicitud.component';
import { ComentarioComponent } from '../comentarios/comentario/comentario.component';
import { ListaMascotasComponent } from './components/lista-mascotas/lista-mascotas.component';
import { SharesModule } from 'src/app/shares/shares.module';


@NgModule({
  declarations: [
    ImagenComponent,
    MascotaComponent,
    ListaMascotasComponent,
    AddMascotaComponent,
    EditMascotaComponent,
    SolicitarAdopcionComponent,
    EditSolicitudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharesModule
  ],
  exports:[
    ImagenComponent,
    MascotaComponent,
    ListaMascotasComponent,
    AddMascotaComponent,
    EditMascotaComponent,
    EditSolicitudComponent
  ]
})
export class MascotasModule { }

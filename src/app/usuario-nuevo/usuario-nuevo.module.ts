import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioNuevoRoutingModule } from './usuario-nuevo-routing.module';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioNuevoComponent],
  imports: [
    CommonModule,
    UsuarioNuevoRoutingModule,
    FormsModule
  ]
})
export class UsuarioNuevoModule { }

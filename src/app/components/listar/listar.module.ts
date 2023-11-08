import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRoutingModule } from './listar-routing.module';
import { ListarComponent } from './listar.component';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { AvisosComponent } from '../avisos/avisos.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { LogsService } from 'src/app/services/logs.service';


@NgModule({
  declarations: [
    ListarComponent,
    CadastrarComponent,
    AvisosComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ]
})
export class ListarModule { }

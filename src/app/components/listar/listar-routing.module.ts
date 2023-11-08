import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar.component';
import { LogsService } from 'src/app/services/logs.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

const routes: Routes = [{
  path: '', component: ListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarRoutingModule { }

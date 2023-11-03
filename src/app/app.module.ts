import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ListarComponent } from './components/listar/listar.component';
import { UsuariosService } from './services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { LogsComponent } from './components/logs/logs.component';
import { AvisosComponent } from './components/avisos/avisos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListarComponent,
    LogsComponent,
    AvisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

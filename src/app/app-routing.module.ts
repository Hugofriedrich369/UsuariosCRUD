import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/listar/listar.module').then(m => m.ListarModule) },
  { path: 'logs', loadChildren: () => import('./components/logs/logs.module').then(m => m.LogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

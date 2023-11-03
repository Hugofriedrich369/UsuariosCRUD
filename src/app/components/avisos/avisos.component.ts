import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAviso } from 'src/app/interfaces/IAviso';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent {
  aviso: IAviso;
  private avisoSubscription!: Subscription;

  constructor(private usuariosService: UsuariosService) {
    this.aviso = usuariosService.aviso;

  }
  ngOnInit() {
    this.aviso = this.usuariosService.aviso;
    this.avisoSubscription = this.usuariosService.avisoAtualizado.subscribe(
      (novoAviso: IAviso) => {
        this.aviso = novoAviso;
      }
    );
  }

  alterarStatus(message: string, status: boolean, type: string) {
    this.usuariosService.alterarStatus(message, status, type);
  }


  ngOnDestroy() {
    this.avisoSubscription.unsubscribe();
  }
}

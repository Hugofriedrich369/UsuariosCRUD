import { Router } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent {

  nome!: string;
  sobrenome!: string;
  idade!: string;
  peso!: string;

  constructor(private usuariosService: UsuariosService, private router: Router) {
  }

  addUser() {
    this.usuariosService.addUser(this.nome, this.sobrenome, this.idade, this.peso);
    this.usuariosService.alterarStatus(`Usuário ${this.nome} ${this.sobrenome} adicionado com sucesso!`, true, 'success')
    this.clearDados();
  }

  clearDados() {
    this.nome = '';
    this.sobrenome = '';
    this.idade = '';
    this.peso = '';
  }

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }


}

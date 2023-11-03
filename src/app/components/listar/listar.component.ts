import { Component } from '@angular/core';
import { IAviso } from 'src/app/interfaces/IAviso';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent {
  usuarios: IUsuario[];
  aviso: IAviso;

  nome!: string;
  sobrenome!: string;
  idade!: string;
  peso!: string;
  indexEdicao!: number;

  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.usuarios = usuariosService.usuarios;
    this.aviso = usuariosService.aviso;
  }

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }

  removeUser(index: number) {
    console.log(index);
    const usuarioDeletado = this.usuariosService.getUser(index);
    this.usuariosService.removeUser(index);
    this.alterarStatus(`Usuário ${usuarioDeletado.nome} ${usuarioDeletado.sobrenome} deletado com sucesso!`, true, "danger")
  }
  alterarStatus(message: string, status: boolean, type: string) {
    this.usuariosService.alterarStatus(message, status, type);
    this.aviso = this.usuariosService.aviso;
  }

  clearDados() {
    this.nome = '';
    this.sobrenome = '';
    this.idade = '';
    this.peso = '';
  }

  edicao(index: number) {
    const usuarioEdicao = this.usuariosService.getUser(index);
    this.nome = usuarioEdicao.nome;
    this.sobrenome = usuarioEdicao.sobrenome;
    this.idade = usuarioEdicao.idade;
    this.peso = usuarioEdicao.peso;
    this.indexEdicao = index;
  }

  editarUser() {
    this.usuariosService.editUser(
      this.nome,
      this.sobrenome,
      this.idade,
      this.peso,
      this.indexEdicao
    );
    this.alterarStatus(`Usuário ${this.nome} ${this.sobrenome} atualizado com sucesso!`, true, 'warning');
    this.clearDados();
  }

}

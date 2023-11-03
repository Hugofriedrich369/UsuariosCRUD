import { LogsService } from './../../services/logs.service';
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

  constructor(private logsService: LogsService, private usuariosService: UsuariosService, private router: Router) {
    this.usuarios = usuariosService.usuarios;
    this.aviso = usuariosService.aviso;
  }

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }

  removeUser(index: number) {
    const modificado: string[] = [];
    const usuarioDeletado = this.usuariosService.getUser(index);
    modificado.push(`Usuário ${usuarioDeletado.nome} ${usuarioDeletado.sobrenome} foi deletado.`)
    this.usuariosService.removeUser(index);
    this.alterarStatus(`Usuário ${usuarioDeletado.nome} ${usuarioDeletado.sobrenome} deletado com sucesso!`, true, "danger")
    this.adicionarLogs(modificado, 'Deletado')
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
    const usuarioAtual: IUsuario = this.usuariosService.getUser(this.indexEdicao);
    const modificado: string[] = this.verificarUsuario(usuarioAtual);

    this.usuariosService.editUser(
      this.nome,
      this.sobrenome,
      this.idade,
      this.peso,
      this.indexEdicao
    );

    this.adicionarLogs(modificado, 'Editado')
    this.alterarStatus(`Usuário ${this.nome} ${this.sobrenome} atualizado com sucesso!`, true, 'warning');
    this.clearDados();
  }

  obterHoraAtual(): string {
    const dataAtual = new Date();
    const hora = this.formatarNumero(dataAtual.getHours());
    const minutos = this.formatarNumero(dataAtual.getMinutes());
    const segundos = this.formatarNumero(dataAtual.getSeconds());
    return `${hora}:${minutos}:${segundos}`;
  }

  obterDataAtual(): string {
    const dataAtual = new Date();
    const dia = this.formatarNumero(dataAtual.getDate());
    const mes = this.formatarNumero(dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  formatarNumero(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  adicionarLogs(modificado: string[], tipo: string) {
    this.logsService.adicionarLogs(this.obterHoraAtual(), this.obterDataAtual(), modificado, tipo);
  }

  verificarUsuario(usuario: IUsuario): string[] {
    const modificacoes: string[] = [];
    if (usuario.nome != this.nome)
      modificacoes.push("Alterou o nome de " + usuario.nome + " para " + this.nome);
    if (usuario.sobrenome != this.sobrenome)
      modificacoes.push("Alterou o sobrenome de " + usuario.nome + " para " + this.sobrenome);
    if (usuario.idade != this.idade)
      modificacoes.push("Alterou a idade de " + usuario.nome + " para " + this.idade + " anos");
    if (usuario.peso != this.peso)
      modificacoes.push("Alterou o peso de " + usuario.nome + " para " + this.peso + " kg");

    return modificacoes;
  }
}


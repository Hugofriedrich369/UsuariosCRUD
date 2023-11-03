import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/IUsuario';
import { IAviso } from '../interfaces/IAviso';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  usuarios: IUsuario[] = [
    {
      nome: "Hugo",
      sobrenome: "Friedrich",
      idade: "18",
      peso: "60"
    }
  ];

  aviso: IAviso = {
    message: '',
    status: false,
    type: '',
  };

  avisoAtualizado = new Subject<IAviso>();

  constructor() { }

  addUser(nome: string, sobrenome: string, idade: string, peso: string) {

    const usuarioNovo: IUsuario = {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade,
      peso: peso,
    };

    this.usuarios.push(usuarioNovo);
  }

  removeUser(index: number) {
    this.usuarios.splice(index, 1);
  }

  getUser(index: number): IUsuario {
    return this.usuarios[index];
  }

  alterarStatus(message: string, status: boolean, type: string) {
    const novoAviso: IAviso = {
      message: message,
      status: status,
      type: type,
    };
    this.aviso = novoAviso;
    this.avisoAtualizado.next(novoAviso);
  }
  editUser(
    nomeEdicao: string,
    sobrenomeEdicao: string,
    idadeEdicao: string,
    pesoEdicao: string,
    index: number
  ) {
    const usuario: IUsuario = {
      nome: nomeEdicao,
      sobrenome: sobrenomeEdicao,
      idade: idadeEdicao,
      peso: pesoEdicao,
    };

    this.usuarios[index] = usuario;
  }

}

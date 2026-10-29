import { Component } from '@angular/core';

// Permite que a gente vincule o input e as varíaveis / for / if
import {CommonModule} from '@angular/common';

// Permite que o Angular gerencie o formulário | Vínculo de botão com métodos
import {FormsModule} from '@angular/forms';
import { Atividade } from './atividade';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  // Atributo => variável de uma classe
  public nome = '';

  // Criando uma lista de atividades
  public lista: Atividade[]= [];

  public editando: number | null = null ;

  adicionar(): void {
    const atividade: Atividade = {
      id: this.lista.length,
      nome: this.nome
    }
    // Eu adiciono à minha lista tudo o que estiver na lista + atividade nova
    this.lista = [...this.lista, atividade];
    this.nome = '';
  }



  salvar(): void {
    this.lista = this.lista.map(item => item.id === this.editando ? {...item, nome: this.nome}: item)
    this.editando = null;
    this.nome = '';
  }

  cancelar(): void {
    this.nome = '';
  }
  
}
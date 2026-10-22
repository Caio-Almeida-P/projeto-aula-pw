import { Component } from '@angular/core';

// Permite que a gente vincule o input e as varíaveis / for / if
import {CommonModule} from '@angular/common';

// Permite que o Angular gerencie o formulário | Vínculo de botão com métodos
import {FormsModule} from '@angular/forms';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  // Atributo => variável de uma classe
  public nome = '';

  cancelar(): void {
    this.nome = '';
  }

}
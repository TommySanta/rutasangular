import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  title = 'rutasangular';
  numeros: number[] = [];

  constructor() {
    this.generarNumerosAleatorios();
  }

  generarNumerosAleatorios(): void {
    this.numeros = [];
    for (let i = 0; i < 6; i++) {
      this.numeros.push(Math.floor(Math.random() * 100) + 1);
    }
  }
}
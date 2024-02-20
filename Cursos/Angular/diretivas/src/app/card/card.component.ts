import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = [];
  menuType: string = '';

  constructor() {
    this.produtos = [
      'mouse',
      'telcado',
      'cabo',
      'fonte',
    ]
  }

  ngOnInit(): void {
  }

  adicionar(): void {
    this.produtos.push('Vitor');
  }

  remover(index:number):void {
    this.produtos.splice(index, 1);
  }

}

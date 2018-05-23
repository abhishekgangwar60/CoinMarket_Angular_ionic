import { Component } from '@angular/core';

@Component({
  selector: 'currency',
  templateUrl: 'currency.html'
})
export class CurrencyComponent {

  text: string;

  constructor() {
    console.log('Hello CurrencyComponent Component');
    this.text = 'Hello World';
  }

}

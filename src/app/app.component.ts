import { Component } from '@angular/core';

import { Product } from './product.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = "Luis"; //Si esto fuera privado, no se compartiria al componente y te saldria error
  age = 18; //Publica, se puede compartir en el template
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  person = {
    name: "Nicolas",
    age: 18,
    avatar: '.'
  }

  feelings: string[] = ['Anger', 'Happiness', 'Sadness', 'Fear', 'Enjoy'];
  //feelings: any[] = ['Anger', 'Happiness', 'Sadness', 'Fear', 'Enjoy']; //No es buena practica
  newFeelings = '';

  products: Product[] = [
    {
      name: 'El juguete',
      price: 200,
      category: 'all',
      tag: 'dance'
    },
    {
      name: 'El Poyo',
      price: 2000,
      category: 'all'
    },
    {
      name: 'El cookie',
      price: 20,
      category: 'all'
    },
  ]

  //Metodo
  //En el metodo puedes colocarlo privado o publico
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  showAlert() {
    alert("Haz activado la alarma");
  }

  incrementAge() {
    this.person.age += 1;
  }

  onScroll (event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onKeyUp (event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addNewFeelings() {
    this.feelings.push(this.newFeelings);
  }

  deleteFeeling(index: number) {
    this.feelings.splice(index, 1);
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*export class AppComponent {
  title = 'fundamentos-angular';
}*/

export class AppComponent {
  name = "Luis"; //Si esto fuera privado, no se compartiria al componente y te saldria error
  age = 18; //Publica, se puede compartir en el template
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  person = {
    name: "Nicolas",
    age: 18,
    avatar: '.';
  }
}

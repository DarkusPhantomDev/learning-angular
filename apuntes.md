# 5. Conceptos basicos de Typescript para usar Angular

**Typescript puedes diferir tipos**

Sin tipado
```typescript
const username = 'Dorime';
```

Con tipado
```typescript
const username: string = 'Dorime'; //Si colocas algo que no tiene que ver con el tipado, ejemplo un entero, te sale error
```

Tambien puedes tener multitipados
Con tipado
```typescript
const username: string | number = 'Dorime'; //Si colocas una cadena de caracteres o numero, todo ok. Pero si es fuera de estos dos tipos, te sale error
```

El tipado puede reducir el 60% de bugs de los errores que tomamos como desarrolladores. **Usen el tipado**.

Una forma de usar el tipado a tu favor, es en las funciones.
```typescript
const sum = (a: number, b:number) => {
	return a + b;
}

sum();
```

Un truco para las funciones de typescript es que  pueden especificar que tipo de dato van a devolver de manera explicita. Despues de los parametros y antes de las flechas de las arrow function

```typescript
const sum = (a: number, b:number):number =>  a + b;

sum(1,2);
```

En angular se usa mucho el patron de POO, veamos un ejemplo

```typescript
class Person {
	age: number;
	lastName: string;

	constructor(age: number, lastName: string) {
		this.age = age;
		this.lastName = lastName;
	}
}

const nico = new Person(15, 'Mulligan');

```

Puedes declarar las variables como privadas o publicas. Se recomienda mantener las variables privadas

```typescript
class Person {
	public dorime: number;
	private age: number;
	lastName: string;

	constructor(age: number, lastName: string) {
		this.age = age;
		this.lastName = lastName;
	}
}

const nico = new Person(15, 'Mulligan');

nico.lastName; //Todo ok
nico.age //No esta disponible por usuarios externos. Estoy siendo protegido

```

Si tienes variables que vas a inicializar en el constructor, y son publicas, puedes usar la abreviatura:

```typescript
constructor(public age: number, public lastName: string){}
```

# 6. String interpolation
Es la forma, desde la logica y en este caso nuestro typescript, en que podemos pasar datos para renderizar nuestro template. 

Ademas, es como nosotros, con nuestros `{{}}`, vamos a implementar nuestras expresion dentro de ellas y obtener un resultado. Ejemplo:

- `{{ 1 + 1}}`

- `{{ myVar }}`

- `{{ myFunction }}`

Los datos que vienen en la logica (los archivos ts) se puede plasmar en el template (html).
Ejemplo:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Aca seleciona el componente
  templateUrl: './app.component.html', //Aca selecciona la ruta para el template (html)
  styleUrls: ['./app.component.scss'] //aca seleciona los archivos para los estilos
})

export class AppComponent {
  name = "Luis"; //Si esto fuera privado, no se compartiria al componente y te saldria error
  age = 18; //Publica, se puede compartir en el template
  img = 'https://source.unsplash.com/random';
}

```

```html
<h1>Hola mundo</h1>
<h2>{{ 'Hola mundo'.repeat(5)}} </h2>
<p> 3 + 3 = {{ 3 + 3 }} </p>
<h3>Hola, soy {{ name }} y tengo {{ age }} </h3>
<img src={{img}} alt="Imagen">
```

# Property Binding

Es una forma de controlar dinamicamente algunos atributos de HTML, para que estos puedan ser rendereizados a partir de un string, variable o atributo de un objeto de la capa lógica.

El caso es que, solo funcionan en una direccion desde la capa logica (component.ts) al objeto destino (atributo html). Esto es conocido como flujos de datos.

Debemos vincular los valores del componente a los atributos HTML. Esto se logra encerrando el atributo HTML entre los "[]" (square breakers).

Los corchetes, [], hacen que angular evalue al lado derecho de la asignación como una expresión dinamica.

Sin los corchetes, angular trata al lado dreche como un literal de cadena y establece la propiedad de ese valor estatico.

```html
<button disabled="false"></button> //Dato fijo como string
<button [disabled="btnDisabled"]></button> //Dato dinamico
```

A menudo, la interpolacion y Property Binding pueden lograr los mismos resultados. Lo siguientes pares de enlace hacen lo mismo.

```html
<p> //Interpolation
  <img src="{{itemImageUrl}}">
  is the <i>interpolated</i> image.
</p>

<p> //Property Binding
  <img [src]="itemImageUrl">
  is the <i>interpolated</i> image.
</p>
```

Utilice cualquiera de las dos formas cuando represente valores de datos como cadenas. Aunque, es prefrible el metodo de interpolacion para facilitar la lectura

Al establecer una propiedad de elemento en un valor de datos, que no sea una cadena, debe usar "Property Binding"

Se recomienda comprender los "Event binding" para entender el flujo de datos de la aplicacion, y como este interactua con "interpolation" y "Property Binding".

Nota: Aplica progress, un elemento reciente de HTML, para mostrar barra de progreso

# 8.  Event Binding

El event binding le permite escuchar y responder a las acciones del usuario, como pulsaciones de teclas, movimeintos del mouse, clics y toques (Atritubtos HTML y propiedades del DOM).

Para vincular un elemento HTML a un evento, debemos indicar el nombre del evento entre parentesis a la izquierda de un signo igual, y el nombre de la funcion entre comillas a la derecha. Recuerda indicar que se trata de una fincion con los parentesis "nameFunction()". Ejemplo:

<button (click)="onSave()">Save</button>

Usar `()` en el template HTML es sinonimo de llamar "addEventListener".

Podemos realizar eventos personalizados con "EventEmitter" y tambien llamar multiples eventos de la siguiente forma:

```html
<button
  (click)="clickEvent()"
  (mouseenter)="mouseEnterEvent()"
>
  Click Me
</button>

```

Además, determinar un objetivo de evento

```html
<button (click)="handleClick($event)">
  Save
</button>
```

Se recomienda comprender el flujo de datos de la aplicacion y cómo este interactua con la misma. Existe tres tipos de enlaces:

- Enlace unidireccional [], para enlazar desde la capa logica (component.ts) a la vista (html).
- Enlace unidreccional (), para enlazar de la vista (html) a la capa logica (component.ts)


# Otros eventos que puedes escuchar

Una forma muy comun de manejar eventos, es pasar el "objeto de evento" `$event`, donde se capturan elementos del DOMM. Por lo general, este evento contiene la información que debemos procesar en el método.

Conviene conocer los objetos del evento DOM [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events).

Tambien debes tener en cuenta el contexto de ejecucion.

Las propiedades de un `$event` (objeto) varian segun el tipo de evento DOM. Por ejemplo, un evento de mouse incluye información diferente a la de un evento de edición de cuadro de entrada.

Podemos escuchar el scroll con el siguiente código:

En el html

```html
<div
  class="box"
  (scroll)="onScroll($event)"
>
</div>
```

En la capa logica:

```typescript
onScroll (event: Event) {
	const element = event.target as HTMLElement;
	console.log(element.scrollTop);
}
```

Otra cosa que podemos hacer, es leer las teclas que se estan digitando a medida que estas son digitadas. Esto lo hacemos con el siguiente codigo:

En el html

```html
<input
  type="text"
  [value]="person.name"
  (keyup)="onKeyUp($event)"
/>
<p>Name {{ person.name }} </p>
```

En la capa logica:

```typescript
onKeyUp (event: Event) {
	const element = event.target as HTMLInputElement;
	this.person.name = element.value;
}
```

Use un tipo de dato especifico (no any) que pueda revelar las propiedades del objeto asociado al evento:

. Sin informacion de tipo, simplifica el codigo al costo de no saber las propiedades del evento

```typescript
onK(event: any) {
	this.values += event.target.value + '|';
}
```

. Define un tipo de dato para el evento que estamos capturando, lo que nos permite utilizar las propiedades adecuadas para el objeto

```typescript
onKey(event: KeyboardEvent) {
	this.values += (event.target as HTMLInputElement).value + '|';
}
```

No todos los elementos tienen una propedad, por lo que se convierte target en un elemento de entrada. El metodo onKey expresa claramente lo que espera y cómo debera interpretar el evento.


Tambien puedes capturar teclas como ctr, Alt, Shift y sus combinaciones:

```html
<input
  (keyup.control)='...respond to ctrl/control...'
/>

<input
  (keyup.alt)='...respond to alt/control...'
/>

<input
  (keyup.shift)='...respond to shift/control...'
/>

<input
  (keyup.meta)='...respond to command...'
/>

<input
  (keyup.control.shift.z)='......'
/>

<input
  (keyup.enter)='...respond to enter...'
/>

<input
  (keyup.escape)='...respond to escape...'
/>

<input
  (keyup.shift.f)='...respond to shift.f...'
/>
```

# 10. Data binding con ngModel

Es importante recalcar que para hacer uso de ngModel, debemos importar el "FormModule" y habilitar el mismo en app.module.ts

Archivo app.module.ts

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { formModule } from '@angular/forms'; //Se añade esto


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    formModule //Se añade esto. Importante para que tambien pueda funcionar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

ngModel realiza un seguimiento de valor y el estado de validacion de un control de formulario individual, debido a las propiedades que hereda de [FormControl](https://angular.io/api/forms/FormControl). Es recomendado saber cómo funciona dicho proceso

Podemos personalizar las validaciones que deberia tener un campo, o el mismo formulario.

Aqui utilizamos las variables de referencia (las que tieenne el signo #) y debemos indicar que la variable debera  tomar el valor del ngModel `<<#nameInput="ngModel>>"`. No se pueden repetir los valores de `#nameElement`

Se pueden realizar las validaciones que normlamente encontramos en HTML y con "pattern". Podemos especificar una comprobacion como expresion regular

Podemos tener un flujo de datos unidireccional con [] o bidireccional con [()]

Acepta inputs y son realmente utiles para estos, gracias a que siempre esta pendiente de los estados. Por ejemplo, para ver si es valido o no, la interacion que tiene el usuario con ese input y sincroniza el valor.

Cuando se utiliza el ngModel, sin la etiqueta `<form>`, es necesario proporcionar un "nombre de atributo", de manera que el control pueda ser registrado en el formulario padre bajo ese nombre

Comportamiento del ngModel sin etiqueta `<form>`

```html

```

# 11. Uso de *nglf
Esta seccion se va a enfocar en Estructuras de control, usando `*nglf`. Este es un ejemplo de condicional

```html
<div *ngIf="show">
	Text to show
</div>
```

```html
<input type="text" required [(ngModel)]="person.name" />
<p *ngIf="person.name === 'Dorime'">My content</p>
<p
  *ngIf="person.name === 'Carlos' && person.age === 18;
  elseBlock"
>
  My content
</p>
<ng-template #elseBlock> <!--Bloque de else-->
  <p>Bloque de else</p>
</ng-template>
```

# 12. Uso del *ngFor

```html
<li *ngFor="let name of names">
  {{ name }}
</li>
```

# 13. Uso del *ngFor

```html
<li *ngFor="let name of names">
  {{ name }}
</li>
```

El metodo de llamada, funciona igual como lo hacemos en la seccion anterior. Mira este ejemplo:

En el HTML

```html
<div>
  <div *ngFor="let product of products">
    <p>Name: {{product.name}}</p>
    <p>Price: {{product.price}}</p>
    <p>Category: {{product.category}}</p>
    <hr>
  </div>
</div>
```

En la logica

```typescript
products = [
    {
      name: 'El juguete',
      price: 200,
      category: 'all'
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
```

Pero hay un problema. Como buena practica, es bueno colocarle tipado a las declaraciones. Pero, ¿Cómo lo hacemos con los objetos? Podriamos intentar tiparlo como `products: string | number`, pero con los objetos no se puede porque tiene multiples tipados. Lo que podemos hacer, es crear un model acerca de ese objeto que queremos tipar.

En este caso, se crea un `product.model.ts` y este seria el tipado

```typescript
interface Product {
  name: string;
  price: number;
  category: string;
}
```

Y si queremos Exportarlo para usarlo en otro componente, podemos hacer esto (o de lo contrario, solo funcionara con ese elemento)

```typescript
export interface Product {
  name: string;
  price: number;
  category: string;
}
```
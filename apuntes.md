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
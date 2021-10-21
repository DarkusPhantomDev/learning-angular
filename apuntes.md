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
Es la forma, desde la logica en este caso nuestro typescript, en que podemos pasar datos para renderizar nuestro template. Ademas, es como nosotros, con nuestros `{{}}`, vamos a implementar nuestras expresion dentro de ellas y obtener un resultado. Ejemplo:

- `{{ 1 + 1}}`

- `{{ myVar }}`

- `{{ myFunction }}`


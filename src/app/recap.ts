//Typescript puedes diferir tipos
//Sin tipado
const username = 'Dorime';

//Con tipado
const username: string = 'Dorime'; //Si colocas algo que no tiene que ver con el tipado, ejemplo un entero, te sale error

//Tambien puedes tener multitipados
const username: string | number = 'Dorime';



//Una forma de usar el tipado a tu favor, es en las funciones.
typescript
const sum = (a: number, b:number) => {
	return a + b;
}

sum();
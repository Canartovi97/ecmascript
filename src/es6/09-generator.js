// Una funcion que retorna una serie de valores segun el algoritmo definido.

//Lo que hace es que va recorriendo el arreglo que le enviamos pero el manteniendo la posicion y continua con el siguiente estado cada vez que sea necesario 

//https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

//El asterisco hace que sea un generador 
function* iterrate(array){

    // el for recorre el array, yield es para retornarlo 
    for (let value of array){
        yield value;
    }

}


const it = iterrate(['Camilo', 'Erika', 'Nicole', 'Javier', 'Jaime']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
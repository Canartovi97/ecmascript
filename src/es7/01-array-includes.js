// Arrray includes, nos permite saber si en un array exite un elemento 


let number = [1,2,3,4,5,6,7,9]



console.log(number.includes(1))


/* En objetos también existen formas para saber si existe una propiedad. Estos son:

La palabra reservada in
El método de objetos hasOwnProperty
El método Object.hasOwn, que recibe el objeto y la propiedad a evaluar.
 */

const letras = { a: 1, b: 2, c: 3 }

"a" in letras // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true



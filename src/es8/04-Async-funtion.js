// Vamos a hacer una promesa con la que tenemos diferentes resultados segun sea el caso 

// con las palabras reservadas Async y await y como podemos ver este flujo 


/* “async-await” es una manera de trabajar de una forma mas cómoda con promesas, 
la palabra reservada “async” quiere decir que una función siempre devolverá una promesa.
Ahora la palabra reservada “await”, solamente existe dentro de una función “async”, que hace que JavaScript 
espere hasta que la función promesa responda para continuar con el código dentro de ésta función,
pero sin pausar la ejecución del siguiente código. */


const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    })
}

const anotherFN = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log('hello')
}

console.log('Before')
anotherFN();
console.log('After')
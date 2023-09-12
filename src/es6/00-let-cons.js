
/* Var  alcance global*/
var lastName = 'davis';
lastName = 'oscar';
console.log(lastName)


/* Let, alcance de bloque */
let fruit = 'apple'
fruit = 'quigui'
console.log(fruit)


/* Conts no se puede reasignar*/
const animal = 'dog'
animal = 'cat'
console.log(animal)



const fruits = () =>{
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'kiwi';  //block scope
        const fruit3 = 'banan'; //block scope
    }

    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits();
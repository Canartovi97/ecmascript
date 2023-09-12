// Object . entryes combierte un objeto en un array de arrays, tambien se puede manejar al contrario 


const entries = new Map([['name', ' Camilo'], ['age', 25]])

console.log(entries);
console.log(Object.fromEntries(entries));
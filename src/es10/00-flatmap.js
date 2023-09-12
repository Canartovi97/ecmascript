// nos devuelve una matris de cualquier sub matriz 


/* Flat */
const array = [1,2,3, [1,2,3, [5,6]]];

console.log(array.flat(3))

// flat map, mapea cada uno de los elementos y luego aplana el mapeo 

const aray2 = [1,2,3,4,5]

console.log(aray2.flatMap(v => [v,v * 1]))
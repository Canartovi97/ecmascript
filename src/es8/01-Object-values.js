// Ejemplo del metodo object.values

// Devolver un array con los valores correspondientes a las propiedades ennumerables de un objeto 


const countries = {Mx: 'Mexico', Co: 'Colombia', Cl : 'Chile', Pe: 'peru'}

console.log(Object.values(countries))

/* Ssolo obtieene los valores, no esta trayando la llave de los objetos 

Salida:
[ 'Mexico', 'Colombia', 'Chile', 'peru' ]
*/

/* ///////////////////// */

//Object keys 




console.log(Object.keys(countries))

/* Salida 

[ 'Mexico', 'Colombia', 'Chile', 'peru' ]
[ 'Mx', 'Co', 'Cl', 'Pe' ]


*/
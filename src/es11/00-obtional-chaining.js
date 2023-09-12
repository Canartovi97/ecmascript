// Un objeto que dentro puede tener un llave valor, y esto tambien puede tener llave valor 
//Esto funciona para detectar el objeto 

const users = {
    camilo:{
        country: 'Cl'
    },
    erika: {
        country:'MX'
    }
}

/* console.log(users.erika.country); */

//Es una pregunta para saber si existe 
console.log(users?.bebeloper?.country)
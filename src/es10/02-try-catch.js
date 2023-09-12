//Para detectar errorres de funciones, umestra lo que pasa cuando algo no esta funcionando 




try {
    hello();
} catch (error) {
    console.log('Error')
}

try{
    anotherfn()
} catch {
    console.log('Es un error')
}
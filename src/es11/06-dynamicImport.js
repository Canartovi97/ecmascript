const button = document.getElementById('btn');


//Buen metodo para utilizar js en tp 

button.addEventListener("click", async function(){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
} )
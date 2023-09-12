// https://www.freecodecamp.org/espanol/news/javascript-rest-vs-operador-de-propagacion-cual-es-la-diferencia/#:~:text=funciona%20en%20JavaScript%3F-,El%20operador%20de%20propagaci%C3%B3n%20(%20...%20),objetos%20iterables%20en%20elementos%20separados.



// Utiliza rest para encerrar el resto de los valores específicos suministrados por el usuario en un arreglo:
function miBiografia(primerNombre, apellido, ...otraInformacion) { 
    return otraInformacion;
  }
  
  // Llama la función miBiografia pasando cinco argumentos a sus parámetros:
  miBiografia("Oluwatobi", "Sofela", "CodeSweetly", "Desarrollador Web", "Masculino");
  
  console.log(miBiografia())

  // La llamada de arriba devolverá:
  //["CodeSweetly", "Desarrollador Web", "Masculino"]
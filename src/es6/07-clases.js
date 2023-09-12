//Declarando una clase 
class User {
};


// Instanciando una clase 
/* const newUser = newUser(); */


class person {
    //metodos 

    greeting() {
        return 'hello';
    }
};

const Camilo = new person();
console.log(Camilo.greeting())




/////////// Constructor 

class user {
    //constructor 
    constructor(){
        console.log('NUevo Usuario');
    }

    greeting() {
        return 'hello';
    }
}

const camilo = new user();




class car {

    // constructor de el carro 

    constructor(marca, color, anio, kilometraje){
        this.marca = marca;
        this.color = color;
        this.anio = anio;
        this.kilometraje = kilometraje;
    }

    //Metodos getter and setter para las propiedades de la clase 
    get getMarca(){
        return this.marca
    }

    set setMarca(newMarca){
        this.marca = newMarca
    }

    get getColor(){
        return this.color
    }
    set setColor(newColor){
        this.color = newColor
    }


    get getAnio(){
        return this.anio
    }

    set setAnio(newAnio){
        this.anio = newAnio
    }


    get getKilometraje(){
        return this.kilometraje
    }


    set setKilometraje(newKIlometraje){
        this.kilometraje = newKIlometraje
    }


    // Metodos de la clase o funciones 

    rentar(){
        return console.log(`Usted esta rentando el carro ${this.marca} del año ${this.anio} de color ${this.color} con el kilometraje ${this.kilometraje} `)
    };

    andar(){
        return console.log(`El carro ${this.marca} esta andando`)
    };
    detenerse(){
        return console.log(`El carro ${this.marca} se detuvo`)
    };
    bloquearAlarma(){
        return console.log(`El carro ${this.marca} se bloqueo`)
    };
}


const carro1 = new car('Kia', 'Azul', 2023, 500);
const carro2 = new car('BMW', 'Blanco', 2005, 10000);
const carro3 = new car('Chevrolet', 'Negro', 2020, 2000);


carro1.rentar();
carro1.andar();



carro2.detenerse();

carro3.bloquearAlarma();


// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);


//Object destructuring 
let user = {userName: 'camilo ', age: 34};

let {userName, age} = user

console.log(userName, age)


// Spread operator 

let person = { name : 'camilo', age : '25'};
let country = 'Co';

let data = { id: 1, ...person, country}

console.log(data)


//rest param


function sum(num, ...values) {
    
    console.log(values);
    console.log(num + values[0]);

    return num + values[0];
}

sum(1, 1, 2 ,5 ,6 , 8)
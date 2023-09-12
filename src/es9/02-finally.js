// promesas, algo que va a suceder en algun momento 


const anotherFuntion = () => {
    return new Promise((resolve, reject) =>{

        if (false) {
            resolve('Hey!!!');
        }else{
            reject('No funca');
        }
    })
}

anotherFuntion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log('finall'))
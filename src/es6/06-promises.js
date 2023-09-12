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
    .catch(err => console.log(err)); 
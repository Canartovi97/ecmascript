function newUser(name, age, country) {
    var name = name || 'oscar';
    var age = age || 30;
    var country = country || 'mx';

    console.log(name,age,country)
}

newUser();
newUser('camilo', 26, 'Co');

 function newAdmin(name = 'oscar', age = 26, country = 'Co') {
    
    console.log(name,age,country)

 }

 newAdmin()
 newAdmin('erika', 24 ,'pe')
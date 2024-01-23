let person = {
    name: 'Duck',
    age: 22,
    address: 'Khu 3, Hoàng Mai, Việt trì, Phú Thọ'
}
console.log('Bước 1')
for(let key in person){
    console.log(key, person[key]);
}

person.dateOfBirth = '18/09/2002';
console.log('Bước 2')
for(let key in person){
    console.log(key, person[key]);
}

delete person.age;
console.log('Bước 3')
for(let key in person){
    console.log(key, person[key]);
}


// for normal

/*for(let i = 1; i < 4; i++) {
    console.log(i);
}

//----------//
const fruits = ['Maça', 'Pera', 'Uva', 'Banana']

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}*/

//------------//

// for in - Obtem o indice tbm

// Arrays
const pizzas = ['Mussarela', 'Calabresa', 'Portuguesa', 'Sorvete'];

for(let i in pizzas) {
    console.log(pizzas[i]);
}

//Objetos
const Person = {
    name: 'Matheus',
    age: '18',
    gender: 'Male'
};

for(let info in Person) {
    console.log(info, Person[info]);
}

//------------///

//for of - somente para objetos iteraveis - Não obtem o indice

const cars = ['Gol', 'Hb20', 'Subaru'];

for(let car of cars) {
    console.log(car);
};

//-------//

// ForEach
Object.keys(Person).forEach((item, index) => {
    console.log(item, Person[item]);
})

cars.forEach(item => {
    console.log(item);
})





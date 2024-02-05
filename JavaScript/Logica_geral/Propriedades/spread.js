// Spread com arrays

let numbers = [1, 2, 3, 4]

let oters = [...numbers, 5, 6, 7, 8]

console.log(oters);


// Sprad com objetos

const Person = {
    name: 'Matheus',
    lastName: 'Brugge',
    age: 18
};

const newPerson = {
    ...Person,
    city: 'Curitiba',
    country: 'Brazil'
}

console.log(newPerson);


// Sprad em funções

function addInfo(info) {
    let newInfo = {
        ...info,
        status: 0,
        token: '28964012894'
    };

    return newInfo
}

console.log(addInfo({name: 'Matheus', lastName: 'Brugge'}));
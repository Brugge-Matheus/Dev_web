// Descontruindo objetos

/*let Person = {
    name: 'Matheus',
    age: 27,
    lastName: 'Brugge',
    social: {
        instagram: {
            url: 'Brugge-Matheus',
            seguidores: 2500
        },
        gitHub: 'Brugge-Matheus'
    },

    fullName: function() {
        return `${this.name} ${this.lastName}`
    }
}

let {name:PersonName, lastName, social:{instagram:{url, seguidores:numbers}} } = Person;

console.log(PersonName, lastName, url, numbers);*/

// let {name:PersonName, lastName, age = 0} = Person;

//let {gitHub, instagram} = Person.social

//----------------------------------------------//

// Descontruct em funções

/*let Person = {
    name: 'Matheus',
    age: 27,
    lastName: 'Brugge',
    social: {
        instagram: {
            url: 'Brugge-Matheus',
            seguidores: 2500
        },
        gitHub: 'Brugge-Matheus'
    }
}

function catchFullName({name, lastName, age, social:{instagram:{seguidores}}}) {
    return `${name}, ${lastName}, ${age}, ${seguidores}`
}

console.log(catchFullName(Person)); */

// Descontruindo arrays

let info = ['Matheus Brugge', 'Matheus', 'Brugge', 18, 'Brugge-Matheus']

let [FullName, , lastName, age, gitHub] = info;

console.log(FullName, gitHub);


// Criar um array ja descontruindo ele

let [class1, class2, newAge = 28] = ['Knigh', 'Sorcerer']

console.log(class1, class2, newAge);


// Descontruir uma array com uma função

function create() {
    return [1, 2, 3];
}

let [n1, n2, n3] = create();

console.log(n1, n2, n3);
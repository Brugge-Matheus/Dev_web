// Class factory - Serve para criar uma função que o resultado final dela é um objeto pronto para ser utilizado

class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }
}

function createPerson(name, age) {
    const people = new Person(name);
    people.age = age;
    return people;
}

const p1 = createPerson('Matheus', 27)

console.log(`Hi my name is ${p1.name} and my age is ${p1.age}`);
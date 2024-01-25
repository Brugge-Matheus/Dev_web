// Programação orientada a objetos - Código programado com objetos que se comunicam entre sí

class Person {
    age = 1; // Cria uma variavel que sera usada para todas as pessoas

    constructor(name, age) {
        this.name = name;
        // this.age = age
    }
}

const Person1 = new Person('Matheus', 18)
const Person2 = new Person('Júlia', 7)
const Person3 = new Person('Kleber', 21)

console.log(Person1.name);
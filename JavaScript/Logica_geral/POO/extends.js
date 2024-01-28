// extends - Cria um objeto se referenciando em outro objeto
// super -  Serve para puxar uma função da função que foi extendida
// Os itens criados sobreescrevem os item que foram herdados

class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }

    get sayHi() {
        return `${this.name} says hello`;
    }
}

class Student extends Person {

    constructor(name, id) {
        super(name);
        this.id = id;
    }

    get sayHello() {
        return super.sayHi;
    }

}

const student1 = new Student('Matheus', 1);
const student2 = new Student('Kleber', 2);


student1.age = 18
student2.age = 22

console.log(`My name is ${student1.name}, my age is ${student1.age} years and my id is #${student1.id}`);
console.log(student1.sayHello);

// console.log(`My name is ${student2.name}, my age is ${student2.age} yaers and my id is #${student2.id}`);
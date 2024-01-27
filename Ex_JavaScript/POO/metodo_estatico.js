// static - Define uma propriedade para todos os objetos daquela categoria, se referindo ao objeto como um todo
// É possivel alterar essa propriedade se referindo a ela Human.race = # (mas normalmente variaveis estaticas nao sao alteradas)

class Human {
    static race = 'Human'

    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    static get sayHi() { // Tambem podemos criar funções estaticas com essa propriedade
        console.log(`Hello, my names is ${this.name}, my age is ${this.age} and my race is ${Human.race}`);
    }

    get sayHi() { // Tambem podemos criar funções estaticas com essa propriedade
        console.log(`Hello, my names is ${this.name}, my age is ${this.age} and my race is ${Human.race}`);
    }

}

const p1 = new Human('Matheus', 20)
Human.race = 'KleberJhonesHuman'

Human.sayHi
p1.sayHi
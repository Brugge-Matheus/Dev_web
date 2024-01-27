// get - Serve para retornar um valor funcional em forma de propriedade
// set -  Serve para atribuir um valor a essa propriedade

class Person {
    age = 0;

    constructor(firtsName, lastName) {
        this.firtsName = firtsName;
        this.lastName = lastName;
 
    }

    get fullName() {
        return (`${this.firtsName} ${this.lastName}`);
    }

    get finalAge() {
        return this.age;
    }

    set finalAge(a) {
        if(typeof a =='number') {
            return this.age = a
            
        }
    }
        
    
}

let Person1 = new Person('Matheus', 'Brugge')
let Person2 = new Person('Rozangela', 'Brugge')
Person1.finalAge = 21;
Person2.finalAge = 42;

console.log(`Olá meu nome é ${Person1.fullName}, muito prazer!`);
console.log(`Eu tenho ${Person1.finalAge} anos de idade!`);

console.log(`Olá meu nome é ${Person2.fullName}, muito prazer!`);
console.log(`Eu tenho ${Person2.finalAge} anos de idade!`);
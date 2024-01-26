// Programação orientada a objetos - Código programado com objetos que se comunicam entre sí

class Person {
    age = 0; // Cria uma variavel que sera usada para todas as pessoas
    steaps = 0;

    constructor(name, age) {
        this.name = name;
        // this.age = age
    }

    takeSteap() {
        this.steaps++;
    }

    setAge(newAge) {
        if(typeof newAge === 'number') {
            this.age = newAge;

        } else {
            console.log('Error');
        }    
        
    }
}
// const Person2 = new Person('Júlia', 7)
// const Person3 = new Person('Kleber', 21)

const Person1 = new Person('Matheus', 18)
Person1.takeSteap();

Person1.setAge(10)

console.log(`Passos de ${Person1.name}: ${Person1.steaps}`);
console.log(`A idade de ${Person1.name} é ${Person1.age}`);
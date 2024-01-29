// Se trata da criação de uma função que cria objetos

let Person = {
    name: 'Matheus',
    lastName: 'Brugge',
    age: 20,

    getFullName() {
        return console.log(`${this.name} ${this.lastName}`);
    },

    start() {
        return console.log(`Iniciou os processos`);
    }

}

Person.start()
console.log(Person.getFullName());


// Herança em programação funcional
// Utilizando o ... (nome_do_objeto) podemos acessar as propriedades de outro objeto criado
const DefaultUser = {
    name: '',
    email: '',
    level: 1

}

let user1 = {
    ...DefaultUser,
    name: 'Matheus',
    email: 'matheusmilczwski@gmail.com'
}

let user2 = {
    ...DefaultUser,
    name: 'Admin',
    email: 'admin@gmail.com',
    level: 2
}

console.log(user1);
console.log(user2);
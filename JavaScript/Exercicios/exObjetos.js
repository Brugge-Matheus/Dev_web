// Exercício de objetos


class Pessoa {
    constructor(first,last,age,gender,interests) {
        this.name = {
            'first': first,
            'last': last,
        }
        this.gender = gender;
        this.age = age;
        this.interests = interests;

        this.bio = () => {
            window.alert(this.name.first + ' ' + this.name.last + ', is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.')
        }
        
        this.greeting = () => {
            window.alert('Hi, iam ' + this.name.first + '.')
        }
    
    }
}

// Tambem é possivel adicionar um objeto específico
let pessoa2 = new Object({
    name: 'Matheus',
    age: '18 anos',
    greeting: function() {
        window.alert('Hi, I/m ' + this.name + '.')
    }
})


let pessoa = new Pessoa('Matheus', 'Brugge', '18', 'Masculino', ['programing', 'cooking']);
let pessoa1 = new Pessoa('Kleber', 'Jhonas', '16', 'Masculino', ['Coding', 'slepping'])

 pessoa
 pessoa.bio()
 pessoa.greeting()

 // pessoa1
 pessoa1.bio()
 pessoa1.greeting()

pessoa2.greeting()
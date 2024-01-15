// A maneira mais correta de se lidar com objetos em JavaScript
// 'constructor' - Se trata das definições e propriedades da classe, podendo adicionar parâmetros a ela

class Animal  {
    constructor(citarNome,citarRaca) {
        this.nome = citarNome
        this.raca = citarRaca
    }

    apresentacao() {
        return this.nome
    }
}

animal = new Animal('Gato','Irlandês');

window.alert(animal.apresentacao())

//-----------//

// Também é possivel herdar propriedades de outras classes utilizando o 'extends'

class NovoAnimal {
    constructor(nome) {
        this.nomeAnimal = nome
    }

    dizerNome() {
        return this.nomeAnimal
    }
}

class OutroAnimal extends NovoAnimal {
    constructor(nome){
        super(nome)
    }
}

novoAnimal = new NovoAnimal()
outroAnimal = new OutroAnimal('Kleber')

window.alert(outroAnimal.dizerNome())

//-----------//

class Nome {
    constructor(n) {
        this.nome = n;

    }

    apresentarlog() {
        console.log(this.nome);
    }

    apresentar(n1) {
        window.alert(`Meu nome é ${n1}`)
    }
}


class NovoNome extends Nome {
    constructor(n) {
        super(n)
    }
}

novoNome =  new NovoNome('Novo texto log')
nome = new Nome('Texto Log')

novoNome.apresentar('Brugge')
novoNome.apresentarlog()

// nome.apresentar('Matheus')
// nome.apresentarlog()
// Criação de um personagem

let personagem = {
    nome: 'Kirito',
    idade: '21',
    forca: '76',
    classe: 'Mago',
    itens: ['poção de vida', ' poção de mana'],
    caracteristicas: {
        altura: '175cm',
        peso: '76kg'
    }
}

// Alterar itens do meu objeto

personagem.nome = 'Pedro'
personagem.nome += ' Matheus'
personagem.itens.push('poção de fúria')
personagem.itens[0] = 'poção de vitalidade'
personagem.caracteristicas.altura = '176cm'

console.log(`A classe de ${personagem.nome} é ${personagem.classe}`);
console.log(`${personagem.nome} esta segurando os seguintes itens: ${personagem.itens}`);
console.log(`A altura e peso de ${personagem.nome} são respectivamente ${personagem.caracteristicas.altura}, ${personagem.caracteristicas.peso}`);


console.log('//-----------//');

//------------//

// Criar objetos dentro de arrays

let novoPersonagem = {
    nome: 'Matheus',
    idade: '26',
    carros: [
        {modelo: 'lancer', marca: 'Mitsubishi', cor: 'preta'},
        {modelo: 'classe-a', marca: 'mercedez', cor: 'roxo'}
    ]
}

console.log(`O ${novoPersonagem.carros[0].modelo} de ${novoPersonagem.nome} é da marca ${novoPersonagem.carros[0].marca} e da cor ${novoPersonagem.carros[0].cor} `);

console.log('//-----------//');

//-----------//

// Funções dentro de obejtos

let novaPessoa = {
    nome: 'Matheus',
    sobrenome: 'Brugge',

    mostrarNome: function() {
        return `${this.nome} ${this.sobrenome}`
    },

    mostrarIdade: (i) => {
        return `${i}`
    }
}

console.log(`Olá meu nome é ${novaPessoa.mostrarNome()} e eu tenho ${novaPessoa.mostrarIdade(16)} anos`);


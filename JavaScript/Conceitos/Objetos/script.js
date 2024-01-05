let pessoa = {

    // Propriedades
    nome: "Matheus",
    apelido: 'Brugge',
    idade: 18,
    genero: 'masculino',

    // Métodos
    apresentar_nome: function() {
        return `Olá, meu nome é ${this.nome} ${this.apelido}`
    },

    apresentar_idade_e_genero: function(){
        return `Eu tenho ${this.idade} anos e sou do sexo ${this.genero}`
    },

    hobbies: ['Programação', 'Cinema', 'Jogos']

}

// console.log(pessoa.nome);  // apresenta a propriedade nome
// console.log(pessoa.apresentar_nome());  // apresenta uma função
// console.log(pessoa.apresentar_idade_e_genero());  // 
// console.log(`Eu gosto muito de ${pessoa.hobbies[0]}`);  // apresenta um array de forma especifica
// console.log(`Meus hobbies são esses: ${(pessoa.hobbies)}`);  // apresenta um array de forma geral
// console.table(pessoa.hobbies)  // apresenta o array em forma de tabela

// pessoa.email = 'matheusmilczwski@gmail.com'
// console.log(`Meu e-mail é ${pessoa.email}`);


delete pessoa.idade  // deletando um item
console.log(pessoa.idade);  //  tentando mostrar o item



// let nova_pessoa = Object.assign({}, pessoa) // definindo o clone
// nova_pessoa.nome = 'Kleber'  //  alterando uma propriedade

// console.table(pessoa)
// console.table(nova_pessoa) // comparação entre os dois objetos

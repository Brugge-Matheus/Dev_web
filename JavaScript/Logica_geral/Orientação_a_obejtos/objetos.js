// Objetos - É uma coleção de propriedades que podem ser utilizadas e chamdas a qualquer momento

//------------//

   let pessoa = {
       'nome': 'Matheus',
       'idade': '18 anos',
       'profissão': 'Programador',

   }

//   window.alert(pessoa.nome)


  // Tambem podemos adicionar um array em um objeto
  let novaPessoa = [{
      nome: 'Kleber',
      idade: '35 anos',
      profissão: 'cozinheiro',
    
  }]

  window.alert(novaPessoa[0].idade) // Utilizando o indice e o nome da propriedade dentro do objeto podemos chama-lo

 //------------//

 // Criar objetos e funções instanciais:

 // Utilizando o 'this' nós crimaos um atributo especifica para essa função
 // Usando o 'new' nós criamos um objeto utilizando o nome da função criada e usando o ponto podemos chamar e atribuir essas propriedades
 // Tambem é possviel alterar as propriedades desse objeto
 // Assim como criar novos objetos utilizando a mesma função como parâmetro e até alterar as propriedades dela sem afetar a outra como mostrado abaixo

 function pessoa (){
     this.pessoa1 = 'Matheus'
 }

 let chamarPessoa = new pessoa()
 let chamarNovaPessoa = new pessoa()

 chamarNovaPessoa.pessoa1 = 'João'

 window.alert(chamarPessoa.pessoa1)
 window.alert(chamarNovaPessoa.pessoa1)

//------------//

// Adiconar funções dentro de funções objetos
// Dessa forma podemos adicionar uma funcionalidade a uma função demtro do objeto e depois chamar ela normalmente 

// !!!IMPORTANTE = A função principal que engloba o objeto necessita ter o nome diferene da variavel de chamda!!!

function idade() {
    this.idade = '18 anos'
    this.mostrarIdade = function() {
        window.alert(this.idade)
    }
}

let Idade = new idade()

Idade.mostrarIdade();

//------------//

// Tambem é possivel utilizar parâmetros para declara as propriedades e fazer validações dos valores

function Animal(nome,peso) {
    if(nome == undefined) {
        nome = 'Informação não fornecida'
    }
    this.nome = nome

    if(peso == undefined) {
        peso = 'Informação não fornecida'
    }
    this.peso = peso

    let apresentacao = window.alert(`O ${nome} possui ${peso}Kg!`)
}

let animal =  new Animal()
 let animal2 =  new Animal('Gato', '4')

animal.apresentacao
 animal2.apresentacao


//------------//

// Passar um objeto como parâmetro de uma função como mostrado abaixo

function Pessoa() {
    this.returnAnimal = (animal) => {
        return animal
    }
}

function Animal() {
    this.raca = 'Bulldog'
}

let pessoa = new Pessoa()
let mostrarRaca = new Animal()

window.alert(pessoa.returnAnimal(mostrarRaca).raca)

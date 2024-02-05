// Em arrays
let list = ['ovo', 'macarrao', 'feijão', 'pipoca']

console.log(Object.keys(list)); // Retorna o index do array
console.log(Object.values(list)); // Retorna o value do array
console.log(Object.entries(list)); // Retorna um array para cada item contendo o nome e o valor desse item (name: 'Matheus')


//----------//

// Em objetos

let Person = {
    name: 'Matheus',
     lastName: 'Milczwski',
      age: 19
};

console.log(Object.keys(Person)); // Retorna todas as chaves que tem nesse objeto em especifico
console.log(Object.values(Person)); // Retorna todos os valores do objeto em especifico
console.log(Object.entries(Person)); // Retorna um array para cada item contendo o nome e o valor desse item (name: 'Matheus')


/*let colors = ['Blue', 'Red', 'Green', 'Yellow']
console.log(colors[0]);

let numbers = [10, 20, 30, 40]
console.log(numbers[1]);

//------------//

// Array dentro de array

let nomes = ['Matheus', ['Kleber', 'Jhones']]
console.log(nomes[1]);

//------------//

// Manipulação de arrays

let ingredientes = [
    'farinha',
    'trigo',
    'ovos',
    'fermento'
];

ingredientes.push('Canela') // adiciona um item a um array
ingredientes.pop() // remove um item de um array

console.log(ingredientes);

//------------//

// Funções dos arrays

let fruits = ['Banana', 'Maça', 'Goiaba', 'Rabanada']

fruits.push('Kiwi'); // Adiciona um novo item ao final do array
fruits.pop(); // Remove o ultimo item do array
fruits.shift(); // Remove o primeiro item do array
fruits.join('-'); // Transforma o array em uma string e utiliza o parâmetro como separação para os itens
fruits[fruits.length - 1] = 'Pitaia' 

console.log(fruits.length); // Mostra a quantidade de itens que tem o array
console.log(fruits);*/

//------------//

// Ordenação de arrays

let frutas = ['Maça', 'Uva', 'Laranja', 'Banana', 'Pitaia']

frutas.sort() // Transforma os itens do array em formato decrescente (a => z)
frutas.reverse() // Reverte a ordem dos itens, combinado com o sort transforma na ordem decrescente (z => a)

console.log(frutas);

//------------//

// Ordenação de array com objetos

let cars = [
    {brand: 'Fiat', year: '2022'},
    {brand: 'Bmw', year: '2018'},
    {brand: 'Ferrari', year: '2020'}
]

cars.sort((a,b) => a.year - b.year); // Pode retornar 0,1 ou -1

console.log(cars);


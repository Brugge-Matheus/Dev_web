let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

let ress = lista.toString(); // Tranforma um array em uma string

console.log(lista.join('-')); // Transforma um array em uma string e usa o parâmetro para divir os itens

lista[lista.length] = 'Cebola'; // Adiciona um item no array baseado na quantidade de itens que existem
console.log(lista);

console.log(lista.indexOf('Massa')); // Pega a poscição de um item

lista.pop(); // remove o ultimo item de um array 
lista.shift(); //Remove o primeiro item de um array

lista.push('Batata'); //Adiciona um item ao final do array
lista.unshift('Kleber') //Adiciona um item ao inicio do array

delete lista[1]; // Deleta o item mas deixa um espaço vazio no array

lista.splice(1, 1); // Remove um item completamente de um array
console.log(lista);

let novaLista = ['Macarrão', 'Batata']

lista = lista.concat(novaLista) // Junta um array com outro
console.log(lista);

// Módulo avançado


lista2 = lista1.forEach(function(item, index, array) {
    array[index] =  item * 2;
})

console.log(lista1);



lista2 = lista1.filter(function(item) {
    if(item < 20) {
        return true;

    } else {
        return false
    }

});

console.log(lista2);


let ressss = lista1.filter(item => {
    if (item == 52 || item == 76) {
        return true;

    } else {
        return false;
    }
})

console.log(res);

// Valida se todos os itens do array são maiores que 20
let lista1 = [45, 22, 52, 76, 23, 21]

let allMore20 = lista1.every(item => item > 20)

if(allMore20) {
    console.log('Todos os itens do array são maiores que 20');
    console.log(lista1);

} else {
    console.log('Nem todos os itens do array são maiores que 20');
    console.log(lista1); 
}


let lista = [
    {id: 1, name: 'Matheus', lastName: 'Brugge'},
    {id: 2, name: 'Pedro', lastName: 'Picasso'},
    {id: 3, name: 'Jhones', lastName: 'Kleber'}
];

let pessoa = lista.find(item => {
    return ((item.id == 3)? true : false);
})

const res = pessoa;
console.log(res);

    








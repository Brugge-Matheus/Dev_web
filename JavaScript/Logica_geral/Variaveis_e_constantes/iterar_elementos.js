// Iterar ou percorrer elementos depois executadar determiandas ações

// Forma manual de percorrer arrays
 /*var ArrayNomes = ['Matheus', 'Guilherme', 'Kleber']

 for(i = 0; i < ArrayNomes.length; i++){
     console.log(ArrayNomes[i]);
 }

// Percorrer arrays com o forEach, você define três parâmetros, primeiro o nome dos itens do array, segundo a quantidade de itens desse array e por último o formato desse array com os itens
let newArrays = ['Matheus', 'Guilherme', 'Kleber']

newArrays.forEach((value, index, array) => {
    console.log(value, index, array);
})*/

// Exemplo de iteração com every
let fruits = ['Banana', 'Jabuticaba', 'Maça']

let smallFruits = fruits.every((value) => {
    return value.length > 3
})

if(smallFruits) {
    console.log(`Todos são maiores que três`);

} else {
    console.log(`Não são maiores que três`);
}

// includes - Serve para procurar um item em um array
let frutas = ['Mimosa', 'Uva', 'Pitaia']

if(frutas.includes('Uva')) {
    console.log('Temos uva nesse array');

} else {
    console.log('Não temos uva nesse array');
}


// Iterar ou percorrer elementos depois executadar determiandas ações

// Forma manual de percorrer arrays
 var ArrayNomes = ['Matheus', 'Guilherme', 'Kleber']

 for(i = 0; i < ArrayNomes.length; i++){
     console.log(ArrayNomes[i]);
 }

// Percorrer arrays com o forEach, você define três parâmetros, primeiro o nome dos itens do array, segundo a quantidade de itens desse array e por último o formato desse array com os itens
let newArrays = ['Matheus', 'Guilherme', 'Kleber']

newArrays.forEach((value, index, array) => {
    console.log(value, index, array);
})
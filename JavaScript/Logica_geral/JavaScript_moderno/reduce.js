// Serve para fazer iterações de forma mais dinâmica e facil
// São necessários ao menos 2 parâmetros, sendo o 1 - o primeiro número do array, 2 - Segundo número do array

const num = [1, 2, 3, 4, 5]

const total = num.reduce(function(acumulattor, actuallyNumber){ // acumulattor vai ser 
    return acumulattor + actuallyNumber
}) 

console.log(total); // Resulta em 15, a soma de todos os valores do array
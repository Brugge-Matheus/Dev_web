/* Podemos declarar de três formas 
var - variável global (pode ser usada globalmente)
let - variável no escopo (pode ser usado apenas no mesmo escopo)
const - variável constante (não muda)
*/

var nome = 'Matheus'
let sobrenome = 'Brugge'
const apelido = 'Kleber'


// Array = Serve para guardar vários dados de um tipo
// Podemos acessar um item desejado utilizando o índice[numero_sequencial] como mostrado abaixo

let nomes = ['Matheus', 'Felipe', 'Brugge']

console.log(nomes[0]); // Mostra o Matheus no console log
console.log(nomes[1]);// Mostra o Felipe no console log

nomes[0] = 'Mathew' // Substitui o item do índice [0] para 'Mathew'

nomes.push('Kleber') // Adiciona um novo item ao final do Array
console.log(nomes[3]);
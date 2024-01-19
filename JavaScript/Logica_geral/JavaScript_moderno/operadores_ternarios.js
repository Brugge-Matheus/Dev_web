/* Os operadores ternários servem como um atalho para o if else comprimindo o código em uma linha
 Sua estrutura é: 'condition ? expr1 : expr2' podendo tambem ser adicionada dentro de uma variavel sendo:
 'let variavel = condition ? expr1 : expr2'
*/

let nome = '3'
nome == 'Matheus' ? console.log('Verdadeiro') : console.log('falso')

//---------//

let numero = 10
let resultado = numero <= 10 ? 'True' : 'False'
console.log(resultado); 

//---------//

let numbers = [10, 20, 30]
 let text = [`Primeiro número é menor igual a 10`, `Primeiro número é maior que 10`]



 const result = numbers[0] <= 10 ? text[0] : text[1];

 console.log(result);

 //---------//

 

// É uma técnica poderosa que permite extrair valores de arrays ou objetos e atribuí-los a variáveis individuais de forma simples e concisa, facilitando muito a manipulação de dados

// Maneira normal
//  const nomes = ['Matheus', 'Guilherme', 'Felipe', 'Kleber']
//  window.alert(nomes[0])

// //---------//

// // Destructure
// // Os valors do array foram atribuidos a estrutura de letras que definimos
// const novosNomes = ['Matheus', 'Guilherme', 'Felipe', 'Kleber', 'Brugge']
// É possivel ignorar valores tambem deixando um '' no meio [a, '', b]

// const [a, b, c] = novosNomes;
// const [a, b,...c] = novosNomes; //Utilizando os tres pontos ... atribuimos todos os valores faltantes ao proximo item do destructure

//---------//

// Pode-se definir quais elementos devem ser extraidos da variavel de origem
let x =  [1, 2, 3, 4, 5]
let [y, z] = x;

console.log(y); // 1
console.log(z); // 2

console.log(c);


//---------//

 var a, b, rest;
 [a, b] = [1, 2];
 console.log(a); // 1
 console.log(b); // 2

 [a, b, ...rest] = [1, 2, 3, 4, 5];
 console.log(a); // 1
 console.log(b); // 2
 console.log(rest); // [3, 4, 5]

//---------//

// É possivel fazer uma atribuição separada de uma declaração
var a,b
[a, b] = [1,2]

console.log(a);
console.log(b);

// tambem é possive analisar um array e retornar uma função
function f() {
    return [1, 2]
}

let a, b;
[a, b] = f();

console.log(a); // 1
console.log(b); // 2
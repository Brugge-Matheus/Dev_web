// São funções mais modernas que ocupam menos código mas possuem uma configuração um pouco diferente das funções

const newfuncao = () => {} // arrow function
const oldfunction = function() {} // forma padrao de declaracao

let teste = (nome) => {
   nome = `Kleber`
    console.log(`My name is ${nome}`); // Chamando funcoes usando parâmtros
}
teste()

//---------//

const newTestes = (par) => {
    return par() // Para definir parametros usar ()
}

newTestes((name) => {
    name = 'Kleber'
    console.log(`My name is ${name}`); // Chamando uma função e um texto como parâmtro de uma função

}, 'Texto de exemplo') 

//---------//

const somar = (x, y) => x + y
console.log(somar(10, 5));
// Exercicio de função de calculo de porcentagem

/*let x = 40
let y = 10
let pct = calcPct(x, y)

function calcPct(n1, n2) {
    return (n2/n1) * 100

}

console.log(`${pct}% de ${x} é ${y}`);*/

// Exercício de calculo de preço de um imóvel
// Minha resolução

// let metragem = 123
// let quartos = 3
// let preco = calcImovel(metragem, quartos)

// function calcImovel(metragem, quartos) {
//     metragem = metragem * 3000

//     if (quartos == 1) {
//         return metragem;

//     } else if (quartos == 2) {
//         return metragem * 1.2;

//     } else if (quartos == 3) {
//         return metragem * 1.5;

//     } else {
//         return 'Erro'
//     }

// }

// console.log(`A casa custa ${preco}`);

//--------------//


// Validador de usuario e senha

/*let usuario = 'Matheus'
let senha = '123'

const validacao = () => {
    if (usuario == 'Matheus' && senha == '123') {
        console.log('Credenciais corretas!');

    } else {
        console.log('Credenciais incorretas!');
    }
}

validacao()*/

//------------//

let usuario = 'Matheus'
let senha = '123'

const validacao = (usuario, senha) => {
    if (usuario == 'Matheus' && senha == '123') {
        return true
    } else {
        return false
    }
}

const mensagem = validacao(usuario, senha)  
    if (mensagem) {
        console.log('Acesso APROVADO');
    } else {
        console.log('Acesso NEGADO');
    }





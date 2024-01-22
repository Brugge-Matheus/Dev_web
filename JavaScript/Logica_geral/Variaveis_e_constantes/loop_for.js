// Laços de repetição ou loop - Significa enquanto, serve para executar uma função repetidamente

// For - Define tres pontos,(inicialização), (condição) e (execução), executa esses pontos até que a condição seja atingida
for(let i = 0; i < 2; i++) {
    console.log(i);
}

//------------//

// Do - Funciona quase da mesma forma que o While, a unica diferença é que ele executa o código ao menos uma vez e depois faz a verificação, diferente do While que faz a verificação primeiro
var n = 0

do {
    console.log(n);
    n++
} while(n < 2)

//----------//

// Loops em arrays

let cores = ['preto', 'branco', 'azul']

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

for(let cor in cores) {
    console.log(cores[cor]);
}

for(let c of cores) {
    console.log(c);
}

//------------//

let novasCores = [
    {nome: 'preto', qt: 5},
    {nome: 'verde', qt: 6},
    {nome: 'rosa', qt: 2}
]

for(let i = 0; i < novasCores.length; i++) {
    console.log(novasCores[i].nome);
}

for(let n in novasCores) {
    console.log(novasCores[n].qt);
}

for(let o of novasCores) {
    console.log(`${o.nome} - ${o.qt}`);
}

for(let a of novasCores) {
    a.nome = a.nome.toUpperCase() // transforma todos os nomes das cores em letra maiúscula
}
console.table(novasCores);


//------------//




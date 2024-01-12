// Exercício calculo de idade

// Minha execução

window.alert('Vou descobrir sua idade com duas perguntas!')

let anoNascimento = prompt('Que ano você nasceu?')
while (isNaN(anoNascimento) || anoNascimento >= 2023) {
    window.alert('Por favor digite seu ano de nascimento corretamente!')

    anoNascimento = prompt('Que ano você nasceu?')
}

let anoAtual = prompt('Em que ano nós estamos')
while (isNaN(anoAtual)) {
    window.alert('Por favor digite seu ano de nascimento corretamente!')

    anoAtual = prompt('Que ano você nasceu?')
}

const calcIdade = () => {
    idadeFinal = anoAtual - anoNascimento
    window.alert(`Você possui ${idadeFinal} anos de idade! `)
}

calcIdade()

//------------//

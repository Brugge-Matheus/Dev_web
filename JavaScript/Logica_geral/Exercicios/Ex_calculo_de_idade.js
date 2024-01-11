// Exercício calculo de idade

// Minha execução
window.alert('Vou descobrir sua atual idade com uma pergunta!')

var anoDeNascimento =  prompt('Qual ano você nasceu?')

while(anoDeNascimento >= 2023 || isNaN(anoDeNascimento)){  // isNan faz a validação se um valor não é um número?
    window.alert('Por favor insira sua data de nascimento correta')
    var anoDeNascimento =  prompt('Qual ano você nasceu?')
}

 var anoAtual = prompt('Qual ano nos estamos?')

const func_resul = () => {
    let resultado = anoAtual - anoDeNascimento;
    window.alert(`Você posui ${resultado} anos de idade!`)
    return
}

func_resul()

//------------//

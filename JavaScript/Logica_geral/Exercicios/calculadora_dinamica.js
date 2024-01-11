// Calculadora dinâmica
// Queremos um número primario
// Queremos um sinal (tipo de operação)
// Queremos um número secundario


 window.alert('Esta é uma calculadora dinâmica, digite os números e a operação que deseja fazer!')

let numeroPrimario = prompt('Digite o número primario')

let operacao = prompt('Digite o símbolo da operação matemática que deseja fazer')

while(operacao != '+' && operacao != '-' && operacao != '*' && operacao != '/' ) {
    window.alert('Favor digitar uma operação matemática valida ex: (+,   -,   *,   /)')

let operacao = prompt('Digite o símbolo da operação matemática que deseja fazer')
}

let numeroSecundario = prompt('Digite o número secundário')



const chamarCalc = () => {
    numeroPrimario = parseFloat(numeroPrimario)
    numeroSecundario = parseFloat(numeroSecundario)

    if(operacao == '+') {
        window.alert(`O resultado dessa soma é ${numeroPrimario + numeroSecundario}`)

    } else if (operacao == '-') {
        window.alert(`O resultado dessa subtração é ${numeroPrimario - numeroSecundario}`)

    } else if (operacao == '*') {
        window.alert(`O resultado dessa multiplicação é ${numeroPrimario * numeroSecundario}`)

    } else if (operacao == '/') {
        window.alert(`O resultado dessa divisão é ${numeroPrimario % numeroSecundario}`)
        
    }
}

chamarCalc()



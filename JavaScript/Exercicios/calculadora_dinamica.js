// Calculadora dinâmica
// Queremos um número primario
// Queremos um sinal (tipo de operação)
// Queremos um número secundario


window.alert('Esta é uma calculadora dinâmica, por gentileza digite os números e a operação matemática que deseja fazer')

let primeiroNumero = prompt('Digite o primeiro número')
while (isNaN(primeiroNumero)) {
     window.alert('Por favor digite um número valido!')

     primeiroNumero = prompt('Digite o primeiro número')
}

let segundoNumero = prompt('Digite o segundo número')
while (isNaN(segundoNumero)) {
     window.alert('Por favor digite um número valido!')

     segundoNumero = prompt('Digite o segundo número')
}

let operacao = prompt('Digite o sinal da operação matemática que deseja efetuar (Ex: +  -  *  )')
while (operacao != '+' && operacao != '-' && operacao != '*' && operacao != '/') {
    window.alert('Por favor digite uma operação matemática valida (Ex: +  -  *  )')

    operacao = prompt('Digite o sinal da operação matemática que deseja efetuar')
}




const calcValor = () => {
    primeiroNumero = parseFloat(primeiroNumero)
    segundoNumero  = parseFloat(segundoNumero)

   if(operacao == '+') {
        window.alert(`O resultado dessa soma é ${primeiroNumero + segundoNumero}`)

   } else if (operacao == '-') {
        window.alert(`O resultado dessa subtração é ${primeiroNumero - segundoNumero}`)

   } else if (operacao == '*') {
    window.alert(`O resultado dessa multiplicação é ${primeiroNumero * segundoNumero}`)
    
    } else if (operacao == '/') {
        window.alert(`O resultado dessa divisão é ${primeiroNumero / segundoNumero}`)
        
   }
}

calcValor()



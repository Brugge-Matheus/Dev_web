// Exibe uma caixa de dialógo solicitando do usuario alguma informação

var nome = prompt('Seu nome é Matheus?') // Define a mensagem 

const definirNome = () => {
    if(nome == 'sim'){
        window.alert('Parabéns, seu nome é Matheus!')
    } else if (nome == 'nao'){
        window.alert('Seu nome não é Matheus )-:')
    } else {
        window.alert('Você não respondeu a pergunta )-:')
    }
}

definirNome()

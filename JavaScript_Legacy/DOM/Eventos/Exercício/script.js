/* OBJETIVO:
Ao clicar no botão a caixa ficara com a cor aquamarine definida pela classe de css.
ira aparecer uma mensagem no console.log
o botao perdera a função, não podendo ser clicado novamente
*/


let botao = document.querySelector('button')
let caixa = document.querySelector('.caixa')

function executar(event){
    caixa.classList.add('cor-fundo-caixa')
    console.log('Este botão foi clicado');
    botao.removeEventListener('click', executar)
}

botao.addEventListener('click', executar)
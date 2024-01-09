/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */

let valor = 0;

const h1_valor = document.getElementById('valor')

document.querySelector('#btn_decremento').addEventListener('click', () => {
    h1_valor.textContent = valor--
    h1_valor.appendChild(valor)
})

document.querySelector('#btn_incremento').addEventListener('click', () => {
    h1_valor.textContent = valor++
    h1_valor.appendChild(valor)
})


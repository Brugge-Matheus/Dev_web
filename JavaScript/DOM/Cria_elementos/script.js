
// Adicionar uma nova div de elemento

// let nova_div = document.createElement('div')
// let novo_titulo = document.createElement('h1')
// novo_titulo.innerText = 'Titulo do elemento 4'
// nova_div.setAttribute('id', 'elemento_4')

// document.body.appendChild(nova_div)
// nova_div.classList.add('elemento')
// nova_div.appendChild(novo_titulo)


// Escolher a posição em que vai adicionar um elemento

let div3 = document.querySelector('#elemento_3')
let novo_paragrafo = document.createElement('p').textContent = 'Texto do paragrafo'

div3.insertAdjacentHTML('beforebegin', novo_paragrafo) // Acima do começo
div3.insertAdjacentHTML('afterbegin', novo_paragrafo) // Abaixo do começo
div3.insertAdjacentHTML('beforeend', novo_paragrafo) // Acima do final
div3.insertAdjacentHTML('afterend', novo_paragrafo) // Abaixo do final


// Remover elementos em JavaScript

let e = document.querySelector('#elemento_1')
e.remove()
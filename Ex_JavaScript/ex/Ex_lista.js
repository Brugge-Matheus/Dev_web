// Lista de tarefas com enter
const input = document.querySelector('input')
const ul = document.querySelector('ul')

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e) {
    if(e.key === 'Enter') {
        const newLi = document.createElement('li')
        newLi.innerHTML = input.value
        ul.appendChild(newLi)

        input.value = ''
    }
}

// lista de tarefas com button
function Adicionar() {
    const btn = document.querySelector('button')
    const ul = document.querySelector('ul')
    const input = document.querySelector('input')

    if (btn) {
        const newLi = document.createElement('li')
        newLi.innerHTML = input.value

        
        ul.appendChild(newLi)

        input.value = ''
    }
}

function Limpar() {
    const ul = document.querySelector('ul')

    ul.innerHTML = ''
}
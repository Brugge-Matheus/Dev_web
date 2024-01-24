let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let btn = box1.querySelector('button')
let btn2 = box2.querySelector('button')
let list = box3.querySelectorAll('li')
let ul = box3.querySelector('ul')

btn.addEventListener('click', () => {
    btn.innerHTML = 'Botão clicado'
    btn.style.backgroundColor = 'grey'
    list[1].innerHTML = 'Texto alterado'

    let newLi = document.createElement('li')
    newLi.innerHTML = 'Novo item adicionado'
    ul.appendChild(newLi)

    ul.innerHTML += '<li>Ultimo item</li>' // outra forma de adicionar itens html a pagina (não recomendado)

    let newUl = document.createElement('ul')
})
btn2.addEventListener('click', () => {
    let newUl = document.createElement('ul')
    ul.after(newUl)
    for (let i = 0; i < 5; i++) {
        let newli = document.createElement('li')
        newli.innerHTML = `Item add ${i}`
        newUl.append(newli)

    }
})




// Propriedades em Dom

// .append - adiciona texto ao final de algo
// .prepend - adiciona texto no inicio de algo
// .after - adiciona um texto ao final de um item
// .before - adiciona um texto ao inicio de um item

// .appendChild - adiciona um elemento a algo



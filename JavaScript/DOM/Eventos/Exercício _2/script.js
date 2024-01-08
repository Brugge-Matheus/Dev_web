//Quando cada uma das tags seja clicada deve mostrar o nome dela no console

// Declaração de váriaveis
// let section = document.querySelector('section')
// let article = document.querySelector('article')
// let div = document.querySelector('div')

// section.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('Section')
// })


// article.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('Article')
// })


// div.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('Div')
// })

// Outra forma com código menor

let elementos = document.querySelectorAll('section, article, div')

elementos.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(e.target.tagName);
    })
})
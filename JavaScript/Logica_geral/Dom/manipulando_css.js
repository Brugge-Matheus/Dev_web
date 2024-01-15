// Selecionar um elementos utilizando algum seletor, logo após isso pode aplicar o 'style' e a propriedade css que deseja aplicar ao elemento

// Seleção atraves de ID
let el = document.getElementById('box')
el.style.width = '200px'
el.style.height = '200px'
el.style.backgroundColor = 'red'
el.style.margin = 'auto'

//---------//

// Seleção atraves de classes

let box = document.getElementsByClassName('box')



for(let i = 0; i < box.length; i++) {
    let el = box[i]

    el.style.width = '200px'
    el.style.height = '200px'
    el.style.backgroundColor = 'red'
    el.style.margin = 'auto'
    el.style.marginTop = '20px'
    el.style.border = '1px solid black'
    
}
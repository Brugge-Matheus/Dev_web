// Manipulação de elementos com JavaScript Dom!

 let paragraph = document.getElementsByTagName('p') // Seleciona todos os elementos de uma determianda tag de Html
 window.alert(paragraph.length)

 window.alert(paragraph[0].innerHTML)  // Retorna uma tag em especifico

//--------// 

// Modificando elementos Html pelo JavaScript

var p = document.getElementsByTagName('p')


for(var i = 0; i < p.length; i++ ) {
    p[i].innerHTML = 'Texto adicionado por JavaScript! - ' + i;
}
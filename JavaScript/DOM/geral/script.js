//  Navegação pelo DOM

// let documento = document.documentElement; // seleciona todo o documento em uma variável
// console.log(documento); // mostra oque tem no doucumento
// console.log(typeof documento);

// console.log(documento.lang); // mostra a definição de lang no site

// for(let a = 1; a < 10; a++) {
//     console.log(a);
// }

document.querySelector('button').addEventListener('click', () => {
    let imagem = document.createElement('img')
    imagem.setAttribute('src', 'bem vindo mobile.png')
    document.body.appendChild(imagem)

} )



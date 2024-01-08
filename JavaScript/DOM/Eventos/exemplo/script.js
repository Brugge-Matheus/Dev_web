// // Buscar o botão
// let botao = document.querySelector('#botao_1')

// // Podemos adicionar multiplos eventos ao msm botão dessa forma

// botao.addEventListener('click', function(){
//     document.querySelector('h1').textContent = 'Novo texto do título'
// })

// botao.addEventListener('click', function(){
//     console.log('O botão foi clicado');
// })

let botao = document.querySelector('#botao_1')

botao.addEventListener('click', () => document.querySelector('h1').textContent = 'Novo titulo do texto')
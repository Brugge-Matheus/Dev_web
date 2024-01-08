/* Criar 25 caixas em stack vertical
com graduação de cores vermelho, verde ou azul
com variação de valor RGB em 10 pontos */

// document.querySelector('#btn_vermelho').addEventListener('click', () => {
//     delete_elements()
//     for(a = 0; a <= 250; a+=10){
//         let temporario_vermelho = document.createElement('div')
//         temporario_vermelho.classList.add('caixa')
//         temporario_vermelho.style.backgroundColor = `rgb(${a},0,0)`
//         document.body.appendChild(temporario_vermelho) 
//     }
// })

// document.querySelector('#btn_verde').addEventListener('click', () => {
//     delete_elements()
//    for(b = 0; b <= 250; b+=10) {
//     let temporario_verde = document.createElement('div')
//     temporario_verde.classList.add('caixa')
//     temporario_verde.style.backgroundColor = `rgb(0,${b},0)`
//     document.body.appendChild(temporario_verde)
//    }

// })

// document.querySelector('#btn_azul').addEventListener('click', () => {
//     delete_elements()
//     for(c = 0; c <= 250; c += 10){
//         let temporario_azul = document.createElement('div')
//         temporario_azul.classList.add('caixa')
//         temporario_azul.style.backgroundColor = `rgb(0,0,${c})`
//         document.body.appendChild(temporario_azul)
//     }
// })



// function delete_elements() {
//     let elementos = document.querySelectorAll('.caixa')
//     elementos.forEach((del) => del.remove())
// }



document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
        delete_elements();
        for(let i = 0; i <= 250; i += 10){
            let tmp = document.createElement('div');
            tmp.classList.add('caixa');
            let a = i; 
            let id = event.target.id;
            if(id === 'btn_vermelho') {
                tmp.style.backgroundColor = `rgb(${a},0,0)`;
            } else if(id === 'btn_verde'){
                tmp.style.backgroundColor = `rgb(0,${a},0)`;
            } else {
                tmp.style.backgroundColor = `rgb(0,0,${a})`;
            }
            document.body.appendChild(tmp);
        }
    });
});

function delete_elements() {
    document.querySelectorAll('.caixa').forEach(del => del.remove());
}
// É possivel fazer animcações utilizando o setTimeout para definir o tempo e uma classe para adiconar algum movimento ao seu objeto como no exemplo abaixo

let box = document.querySelector('.box')


box.addEventListener('click', () => {
    setTimeout(() => {
        box.classList.add('animation')
     }, );
})
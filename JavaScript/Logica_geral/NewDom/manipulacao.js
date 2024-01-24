function Clicar() {
    const input = document.querySelector('.txt')
    let btn = document.querySelector('.btn')

     if(input.hasAttribute('placeholder')) 
         console.log(`Tem placeholder SIM`)

     else {
         console.log(`Não tem placeholder`);
     }

     

    input.setAttribute('placeholder', 'Digite um novo texto aqui')
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        btn.innerHTML = 'Esconder senha'
        

    } else if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        btn.innerHTML = 'Mostrar senha'
    }

    

}
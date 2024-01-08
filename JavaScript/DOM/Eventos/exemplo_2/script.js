// Desativar a função nativa de um link
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
})

// Destivar a submissão de formulário
document.querySelector('.submit_btn')
.addEventListener('click', (event) => {  
    event.preventDefault()    
})

// Cuidado com a Propagação!
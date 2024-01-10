// Validação de formulários com cancelamento da função do botão e mensagem de erro

// Usuario
document.querySelector(`input[name='usuario']`).addEventListener('keyup', () => {
    if(document.querySelector(`input[name='usuario']+ span`) !== null){
    document.querySelectorAll('.error').forEach(e => e.remove());
    }
})

// Usuario
document.querySelector(`input[name='senha']`).addEventListener('keyup', () => {
    if(document.querySelector(`input[name='senha']+ span`) !== null){
    document.querySelectorAll('.error').forEach(e => e.remove());
    }
})

document.querySelector('.form_login').addEventListener('submit', (event) => {
    const usuario = event.target.usuario.value;
    const senha = event.target.senha.value;
    let submit = true;

     //Apagar mensagens de erro anteriores
     document.querySelectorAll('.error').forEach(e => e.remove());    

    // Validação do usuário
    if (usuario === '') {
        submit = false;

        const erroUsuario = document.querySelector(`input[name='usuario']`);
        erroUsuario.insertAdjacentHTML('afterend', `<span class='error'>Usuário é obrigatório</span>`);
    }

    // Validação da senha
    if (senha === '') {
        submit = false;

        const erroSenha = document.querySelector(`input[name='senha']`);
        erroSenha.insertAdjacentHTML('afterend', `<span class='error'>Senha é obrigatória</span>`);
    }

    // Cancela a submissão do formulário se houver erro
    if (!submit) {
        event.preventDefault();
    }
});
// Validação de formulários com Negação de click e alerta

    document.querySelector('.form_login').addEventListener('submit', (e) => {
       //Buscar valores dos campos
      let usuario = e.target.usuario.value
      let senha = e.target.senha.value
      let submit = true

      // Validar usuario
      if(usuario === ''){
          submit = false
      }

      // Validar senha
      if(senha === ''){
          submit = false
      }

      // Verificar se o formulário pode ser submetido
      if(!submit){
          e.preventDefault()
          window.alert('Favor preencher todos os dados')
      }
  })

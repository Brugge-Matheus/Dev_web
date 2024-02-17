// Validation functions

const validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;
        let inputs = document.querySelectorAll('.form-validator input');
        inputs.forEach(input => input.style.border = 'none');

        validator.clearErrors();
        
        inputs.forEach(input => {
            let check = validator.checkInput(input);

            if(check !== true) {
                send = false;
                validator.showError(input, check);
                
            }
        });

        if(send) {
            event.target.submit();
        }
    },

    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null) {
           rules = rules.split('|');
           for(let i in rules) {
                let ruleDetails = rules[i].split('=');

                switch(ruleDetails[0]) {
                    case 'required':
                        if(input.value.trim() === '') {
                            return `Este campo é obrigatório!`;
                        }
                        break;
                    case 'min':
                        if(input.value.length < parseInt(ruleDetails[1])) {
                            return `Este campo deve ter no mínimo ${ruleDetails[1]} caracteres`;
                        }
                        break;
                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                            if(!regex.test(input.value.toLowerCase())) {
                                return `E-mail digitado não é válido!`
                            }
                        }
                }
            }
        }
        return true;
    },

    showError: (input, error) => {
        input.style.border = '2px solid red'

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementeSibling);  
    },

    clearErrors: () => {
      let errorElements = document.querySelectorAll('.error');
      for(let i = 0; i < errorElements.length; i++) {
        errorElements[i].remove();

        document.querySelector('.form-validator input').style.border = 'none';
      }
    }
};

// Events

let form = document.querySelector('.form-validator');
form.addEventListener('submit', validator.handleSubmit);

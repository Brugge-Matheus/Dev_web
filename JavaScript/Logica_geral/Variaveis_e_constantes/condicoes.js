// Condições - Quanto deseja fazer alguma verificação
// If - Se trata da palavra 'se'
// Else if - Significa 'se não se'
// Else - Significa 'Caso contrario', Se nada for verdade ele aplica o código definido
/* */

let numero = 15;
let nome = 'Kleber'

if(nome == 'Matheus'){
    console.log('A afirmação é verdadeira');

} else if(nome == "Brugge"){
    console.log('Entramos no else if! a afirmação é verdadeira');

} else {
    console.log('Nenhuma das opções é verdadeira');

}

// Validação de valores
// < - menor
// <= - menor igual
// > - maior
// >= - maior igual
// == igual
// != diferente
// === - Igual em todos os sentidos (tipo de dado)

if(numero == 10){
    console.log('Afirmação verdadeira!');
}


// Outros tipos de validações
// && - As duas validações precisam ser verdadeiras
// || - Apenas uma das validações precisa ser verdadeira

if(nome == 'Kleber' && numero == 10){
    console.log('Afirmação verdadeira!');
}else {
    console.log('Afirmação falsa!');
}

if(nome == 'Kleber' || numero == 20){
    console.log('Afirmação verdadeira!');
}

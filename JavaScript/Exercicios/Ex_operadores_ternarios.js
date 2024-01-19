// Uma empresa possui um sistema de membros cujo quem é membro paga um frete mais barato, passe isso para código

let isMember = true

let shipping = isMember ? 2 : 10;

console.log((isMember) ? 'Você é membro!' : 'Você não é membro');
console.log(`Frete: R$${shipping},00`);

//-------//

// Verificador de idade

let age = 18
let isAdult = ((age < 18) ? 'É menor de idade' : 'É maior de idade')

console.log(isAdult);


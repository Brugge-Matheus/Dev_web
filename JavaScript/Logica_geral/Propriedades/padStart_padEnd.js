//de forma geral serve para definir uma quantidade de itens para uma string, e caso ela não atinga esse número ela substitui por itens escolhidos


// padEnd - Define esses itens para esquerda (end)
let phone = '5678';

console.log(phone.padEnd(9, '-'));

// padStart - Define esse sitens para a direita (start)
let newPhone = '5678';

console.log(newPhone.padStart(9, '*'));

// Aplicação real
let card = '1234-1234-1234-5567'
let lastDigits = card.slice(-4)
let cardMask = lastDigits.padStart(16, '*')

console.log(`Este é o seu cartão? ${cardMask}`);
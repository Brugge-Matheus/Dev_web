// Loop While - adicionando a condicional em seguida o código que deseja deixar em looping

let control = 0;

while(control <= 5) {
    console.log(control);

    control++;
}

//-----//
function randomNumber(min, max) {
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
}

let random = randomNumber(1, 50)

while(random !== 10) {
    random = randomNumber(1, 50);
    console.log(random);
}

//---------//

// do While - Executa ao menos uma vez
do {
    console.log(control);

    control++;
} while (control < 10);




const date = new Date();
const actualDay = date.getDay();
let textDay;

switch(actualDay) {
    case 0:
        textDay = 'Domingo';
        break;
    case 1:
        textDay = 'Segunda';
        break;
    case 2:
        textDay = 'Terça';
        break;
    case 3:
        textDay = 'Quarta';
        break;
    case 4:
        textDay = 'Quinta';
        break;
    case 5:
        textDay = 'Sexta';
        break;
    case 6:
        textDay = 'Sabado';
            break;
    default:
        textDay = 'Não identificado'
}

console.log(textDay);
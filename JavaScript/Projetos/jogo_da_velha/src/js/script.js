// Dados iniciais
let frame = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let playerTurn;
let warning;
let playig = false;

reset();

// Eventos
document.querySelector('.reset').addEventListener('click', reset)


// Funções
function reset() {
    warning = ''

    let random = Math.floor(Math.random() * 2)

    random === 0 ? playerTurn = 'x' : playerTurn = 'o';
//or player = (random === 0) ? 'x' : 'o';

    for(let i of frame) {
        frame[i] = '';
    }

    playig = true;

    renderFrame();
    renderInfo();
}

const renderFrame = () => {
    for(let i of frame) {
       let item =  document.querySelector(`div[data-item=${i}]`)
       item.innerHTML = frame[i];

    }
}

const renderInfo = () => {
    document.querySelector('.vez').innerHTML = playerTurn;
    document.querySelector('.resultado').innerHTML = warning;
}

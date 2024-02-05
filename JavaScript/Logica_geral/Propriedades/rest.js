function addNames(...names) {
    return console.log(names);
}

addNames('Matheus', 'Kleber', 'Lucas', 'Jhonatam')

//------------//

function add(names, ...newNames) {
    const boxNames = [
        ...names,
        ...newNames
    ];

    return boxNames;
}

let names = ['Matheus', 'Leticia'];
let oters = add(names, 'Kleber', 'Julia', 'Rozangela')

console.log(oters);
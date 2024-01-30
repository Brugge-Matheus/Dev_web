/* 
Oque é um Callback
*/

function clickCallback() {
    window.alert('Clicou no botão');
}

document.querySelector('button').addEventListener('click', clickCallback);
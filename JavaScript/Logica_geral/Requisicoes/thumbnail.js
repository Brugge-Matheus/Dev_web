// Função de modo sincrono
/*function View() {
    let image = document.getElementById('img').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);

    document.querySelector('#imgArea').appendChild(img);

}*/

// Função de modo assincrono

function View() {
    let file = new FileReader();
    let img = document.querySelector('#img').files[0]

    file.onloadend = function() {
        let img = document.createElement('img')
        img.src = file.result

        document.getElementById('imgArea').appendChild(img)
    }

    file.readAsDataURL(img);
}

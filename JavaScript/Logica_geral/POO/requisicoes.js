/* 
Oque é um Callback
*/

// Promisse (Promessa)


// Requisição simples

const CallApi = () => {
    let req = fetch('https://jsonplaceholder.typicode.com/postss')

    req.then((response) => {
        return response.json();


    }).then((json) => {
        window.alert(`Título do primeiro post: ${json[0].title}`)


    }).catch((error) => {
        console.log('Erro ao chamar a API');
        console.log(error);


    }).finally(() => {
        window.alert('Finally process!!')
    })

}



function somar(x, y) {
    return x + y;
}

document.querySelector('button').addEventListener('click', CallApi);
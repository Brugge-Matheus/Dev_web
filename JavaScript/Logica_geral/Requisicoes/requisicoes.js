/* 
Oque é um Callback
*/

// Promisse (Promessa)


// Requisição simples utilizando than

/*const CallApi = () => {
    let req = fetch('https://jsonplaceholder.typicode.com/posts')

    req.then((response) => {
        return response.json();


    }).then((json) => {
        window.alert(`Título do primeiro post: ${json[0].title}`)


    }).catch((error) => {
        console.log('Erro ao chamar a API');
        console.log(error);
    })

    window.alert('Clicou')

}*/

// Requisição de POST usando o .than
/*const insert = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo do teste',
            userId: 2
        })
    }).then((response) => {
        return response.json();

    }).then((json) => {
        console.log(json);
    })
}*/


// Requisição GET utilizando Async e Await
/*const CallApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    window.alert(`Titile of the first post: ${json[0].title}`)
    console.log(json[0]);

    window.alert('Clicked')
}

// Requisição POST utilizando Async e Await
async function insert() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Test tittle',
            body: 'Test body',
            userId: 4
        })
        
    });

    const json = await response.json();
    console.log(json); 
}

document.querySelector('button').addEventListener('click', CallApi);
document.querySelector('#newPost').addEventListener('click', insert);
*/
// Utilizando Promise
function cathTemp() {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura...');

        setTimeout(() => {
            console.log('22 na sombra');

        }, 2000);
    })
}

// Usando a Promise
let temp = cathTemp()
temp.then(function(temperatura) {
    console.log(`Temperatura ${temperatura}`);

})

temp.catch(function(error) {
    console.log('Erro ao executar');
})

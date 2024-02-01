const readPosts = async () => {
    let areaPost = document.querySelector('.posts');
    areaPost.innerHTML = 'Carregando...';

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    if(json.length > 0) {
        areaPost.innerHTML = ''


        for(let post of json) {
            let title = document.createElement('h1');
            title.innerHTML = post.title;

            let body = document.createElement('p');
            body.innerHTML = post.body;

            areaPost.appendChild(title);
            areaPost.appendChild(body);

        }

    } else {
        areaPost.innerHTML = 'Nenhum post foi encontrado!'
    }
}


const insetBtn = document.querySelector('#insertBtn').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    if(title && body) {
        addNewPost(title, body);

    } else {
        window.alert('Por gentileza preencher todos os itens do formulário!')
    }
});

async function addNewPost(title, body) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 2
        })
    });

    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''

}

readPosts();
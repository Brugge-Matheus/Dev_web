

const readPosts = async () => {
    const postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando....';

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    if(json.length > 0) {
        postArea.innerHTML = '';

        for (let post of json) {
            let title = document.createElement('h1');
            title.innerHTML = post.title;

            let body = document.createElement('p');
            body.innerHTML = post.body;

            postArea.appendChild(title);
            postArea.appendChild(body);
        }

    } else {
        postArea.innerHTML = 'Nenhum post a ser adicionado!'; 

        await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                
            }
        })
    }
}

async function addNewPost(title, body) {

}

const InserBtn = document.querySelector('#insertBtn').addEventListener('click', async () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body) {
        addNewPost(title, body);

    } else {
        window.alert('Por gentileza preencha todos os campos!')
    }
})

readPosts();


// https://jsonplaceholder.typicode.com/posts

/*const postArea = document.querySelector('#postArea')

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
        constBlog(posts)
    })
}
*/
function constBlog(posts) {
    let html = '';

    for(let post of posts) {
        html += '<h3>' + post.title + '</h3>';
        html += '<p>' + post.body + '</p><br/>';
        html += '<hr/>';
    }

    postArea.innerHTML = html;
}


// Código com async await

const loadPosts = async () => {
    const requisition = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
    const json = await requisition.json();
    constBlog(json);
    
}


// Adicionando um post

const addPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo do post',
            body: 'Corpo do post',
            userId: 4
        }),
        headers: {
            'Content-Type':'application/json'
        }

    })

    const json = await response.json();
    inserPost(json)
}

function inserPost(newPost) {

}



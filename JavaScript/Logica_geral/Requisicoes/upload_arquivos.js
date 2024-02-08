async function uploadArchive() {
    let archive = document.getElementById('arq').files[0];

    let body = new FormData();
    body.append('title', 'Titulo do arquivo')
    body.append('arquivo', archive)

    const requistion = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {'Content-Type':'multipart/form-data'}

    })

}
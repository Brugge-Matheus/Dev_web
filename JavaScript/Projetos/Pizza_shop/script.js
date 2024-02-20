// Initial data
const q = (el) => document.querySelector(el);
const qs = (el) => document.querySelectorAll(el);

let clickedPi



//Functions
pizzaJson.map((item, index) => {
    let pizzaItem = q('.models .pizza-item').cloneNode(true);

    // Add informations
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2).replace('.', ',')}`;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Add images
    let images = pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    // Add modal
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        
        // Modal informations
        q('.pizzaBig img').setAttribute('src', pizzaJson[key].img)
        q('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        q('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        q('.pizzaInfo--price').innerHTML = `R$${pizzaJson[key].price.toFixed(2).replace('.', ',')}`
        qs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            
        })

        // Modal animations
        q('.pizzaWindowArea').style.opacity = 0;

        setTimeout(() => {
            q('.pizzaWindowArea').style.opacity = 1;
        }, 100);

        q('.pizzaWindowArea').style.display = 'flex';
    })

    // Add 
    

    // Preencher os itens na tela
    q('.pizza-area').append(pizzaItem);
})

//Events
// Initial data
const q = (el) => document.querySelector(el);
const qs = (el) => document.querySelectorAll(el);

let cart = [];
let modalQt = 1;
let modalKey = 0;



//Functions
pizzaJson.map((item, index) => {
    let pizzaItem = q('.models .pizza-item').cloneNode(true);

    // Add informations
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2).replace('.', ',')}`;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Add images
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    // Add modal
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;
        
        // Modal informations
        q('.pizzaBig img').src = pizzaJson[key].img;
        q('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        q('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        q('.pizzaInfo--actualPrice').innerHTML = `R$${pizzaJson[key].price.toFixed(2).replace('.', ',')}`;
        q('.pizzaInfo--size.selected').classList.remove('selected');
        qs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        q('.pizzaInfo--qt').innerHTML = modalQt;

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
});



// Modal events

// close modal
function closeModal() {
    q('.pizzaWindowArea').style.opacity = 0;
    
    setTimeout(() => {
        q('.pizzaWindowArea').style.display = 'none'
    }, 100);  
};

qs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton ').forEach(item => {
    item.addEventListener('click', closeModal)
});

// qtd itens

q('.pizzaInfo--qtmenos').addEventListener('click', () => {
    (modalQt > 1) ? modalQt-- : null;
    
    q('.pizzaInfo--qt').innerHTML = modalQt;
});

q('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    q('.pizzaInfo--qt').innerHTML = modalQt;

});

// size selected
qs('.pizzaInfo--size').forEach((size, indexSize) => {
    size.addEventListener('click', (event) => {
        q('.pizzaInfo--size.selected').classList.remove('selected')
        event.currentTarget.classList.add('selected')
    })
})

// cart
q('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = q('.pizzaInfo--size.selected').getAttribute('data-key');

    cart.push({
        id: pizzaJson[modalKey].id,
        size,
        qtd: modalQt
    });
        
});
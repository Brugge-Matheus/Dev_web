// Initial data
const navFormItens = document.querySelectorAll('.nav-form a');


// Functions
function selectedItem(event) {
    const clickedItem = event.currentTarget;

    navFormItens.forEach(item => {
        item.classList.remove('active-item');
        item.style.color = 'var(--text-color6)'; 
    });

    clickedItem.classList.add('active-item');
    clickedItem.style.color = 'white'; 
}


// Events
navFormItens.forEach(item => {
    item.addEventListener('click', selectedItem);
});


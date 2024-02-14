// Initial Data
let areas = {
    a: null,
    b: null,
    c: null
}

// Events
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.area').forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', drop);
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

// Functions item
function dragStart(event) {
    event.currentTarget.classList.add('dragging');
}

function dragEnd(event) {
    event.currentTarget.classList.remove('dragging');
}

// Functions area
function dragOver(event) {
    if(event.currentTarget.querySelector('.item') === null) {
        event.preventDefault();
        event.currentTarget.classList.add('hover');
    } 
}

function dragLeave(event) {
    event.currentTarget.classList.remove('hover');
}

function drop(event) {
    event.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.item.dragging');

    if(event.currentTarget.querySelector('.item') === null) {
        event.currentTarget.appendChild(dragItem);
        
        updateAreas()
    }
}

// Functions neutral area
function dragOverNeutral(event) {
    event.preventDefault();
    event.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(event) {
    event.currentTarget.classList.remove('hover');
}

function dropNeutral(event) {
    event.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.item.dragging');
    event.currentTarget.appendChild(dragItem);

    updateAreas() 
}


// Control function
function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if(area.querySelector('.item')!== null) {
            areas[name] = area.querySelector('.item').innerHTML;

        } else {
            areas[name] = null;
        }

    })
    console.log(areas);

    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');

    } else {
        document.querySelector('.areas').classList.remove('correct');
    }
}

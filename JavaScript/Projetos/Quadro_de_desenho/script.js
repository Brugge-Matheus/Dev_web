/* Steap by steap for draw in canvas
- Quando o mouse ABAIXAR  ative o modo desenho.
- Quando o mouse se MOVER, se o modo desenho estiver ativado, desehne.
- Quando o click do mouse LEVANTAR, desative o modo desenho.
*/

// Initial Data
let currentColor = "black";
let canDraw = false;
let mouseX;
let mouseY;

let screen = document.querySelector("#tela");
let contexto = screen.getContext("2d");

// Events
document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

document.querySelector('.clear').addEventListener('click', clearScreen);

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

// Functions
function colorClickEvent(event) {
  var color = event.target.getAttribute("data-color");
  currentColor = color;

  document.querySelector(".color.active").classList.remove("active");
  event.target.classList.add("active");
}

function mouseDownEvent(event) {
  canDraw = true;
  mouseX = (event.pageX - screen.offsetLeft);
  mouseY = (event.pageY - screen.offsetTop);
}

function mouseMoveEvent(event) {
  if (canDraw) {
    draw(event.pageX, event.pageY)
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function draw(x, y) {
    let pointX = (x - screen.offsetLeft)
    let pointY = (y - screen.offsetTop)

    // Draw
    contexto.beginPath();
    contexto.lineWidth = 5;
    contexto.lineJoin = "round";
    contexto.moveTo(mouseX, mouseY);
    contexto.lineTo(pointX, pointY);
    contexto.closePath();
    contexto.strokeStyle = currentColor;
    contexto.stroke();

    // Uptade 
    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    contexto.setTransform(1, 0, 0, 1, 0, 0);
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height)
}

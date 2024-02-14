// Initital Data
let currentQuestion = 0;
let correctAnswers = 0;

let finalText = document.querySelector('.scoreText1')
let finalPct = document.querySelector('.scorePct')
let finalScore = document.querySelector('.scoreText2')

showQuestion();

// Functions
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    let percent = Math.floor((currentQuestion / questions.length) * 100);
    document.querySelector('.progress--bar').style.width = `${percent}%`
 
    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";

    document.querySelector('.question').innerHTML = q.question;
    document.querySelector('.options').innerHTML = '';

    let optionsHtml = '';
    for(let i in q.options) {
        optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
    }
    document.querySelector('.options').innerHTML = optionsHtml;
    document.querySelectorAll('.options .option').forEach(item => {
        item.addEventListener('click', optionClickEvent)
    });

  } else {
    // acabaram as questões
    finishQuiz()
  }
}

function optionClickEvent(event) {
    let selectOption = parseInt(event.target.getAttribute('data-op'))
    
    if(questions[currentQuestion].answer === selectOption) {
        correctAnswers++;

    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100)

    finalPct.innerHTML = `Acertou ${points}%`
    finalScore.innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}`

    if(correctAnswers >= 7) {
        finalPct.style.color = 'green'
        finalText.innerHTML = 'Parabéns!'

    } else if (correctAnswers > 4 && correctAnswers < 7) {
        finalPct.style.color = 'yellow'
        finalText.innerHTML = 'Boa!'
    
    } else {
        finalPct.style.color = 'red'
        finalText.innerHTML = 'Melhore...'
    }

    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.progress--bar').style.width = `100%`
}

function newGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion()
}

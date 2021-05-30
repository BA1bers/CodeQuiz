var question = document.querySelector('#question');
var questionNum = 0;
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var timeCount = document.querySelector('.timer ,timer_sec');

var interval = setInterval()

let questions = [
    {
        question: 'What does HTML stand for?',
        choice: [
            'Hyper Text Preprocessor',
            'Hyper Text Markup Language',
            'Hyper Text Multiple Language',
            'Hyper Tool Multi Language'
        ],
        answer: 'Hyper Text Markup Language',
    },
    {
        question: 'What does CSS stand for?',
        choice: [
            'Common Style Sheet',
            'Colorful Style Sheet',
            'Computer Style Sheet',
            'Cascading Style Sheet',
        ],
        answer: 'Cascading Style Sheet',
    },
    {
        question: 'Commonly used data types DO NOT Include',
        choice: [
            'Booleans',
            'Numbers',
            'Strings',
            'Alerts'
        ],
        answer: 'Alerts',
    },
    {
        question: 'The condition in an if/else statement is ecnlosed with _______.',
        choice: [
            'Parenthesis',
            'Square Brackets',
            'Quotes',
            'Curly Brackets',
        ],
        answer: 'Parenthesis',
    },
    {
        question: 'Arrays in Javascript can be used to store _______.',
        choice: [
            'Other Arrays',
            'Booleans',
            'Numbers and Strings',
            'All of the Above',
        ],
        answer: 'All of the Above',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice: [
            'Terminal/Bash',
            'Console.log',
            'Javascript',
            'For Loops',
        ],
        answer: 'Console.log',
    }
]

console.log(choices[0].innerHTML)

function startGame() {
    question.innerHTML = questions[0].question
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = questions[0].choice[i]
    }
}

function queChanger() {
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (questionNum !== 5) {
                console.log(e.target.innerHTML)
                if (e.target.innerHTML === questions[questionNum].answer) {
                    console.log('correct')
                    questionNum = questionNum + 1;
                    question.innerHTML = questions[questionNum].question
                    for (let i = 0; i < choices.length; i++) {
                        choices[i].innerHTML = questions[questionNum].choice[i]
                    }
                } else {
                    console.log('incorrect')
                    questionNum = questionNum + 1;
                    question.innerHTML = questions[questionNum].question
                    for (let i = 0; i < choices.length; i++) {
                        choices[i].innerHTML = questions[questionNum].choice[i]
                    }
                }
            } else {
                if (e.target.innerHTML === questions[questionNum].answer) {
                    console.log('correct')
                } else {
                    console.log('incorrect')
                }
            }
        })
    })
}

startGame()
queChanger()
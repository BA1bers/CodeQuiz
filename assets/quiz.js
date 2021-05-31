var question = document.querySelector('#question');
var questionNum = 0;
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var timeCount = document.querySelector('.timer');
var time = 60;

function startTimer() {
    var counter = setInterval(function() {
        if (time >= 0) {
            timeCount.textContent = time
            time--;
        } else {
            timeCount.textContent = '';
            clearInterval(counter);
        }

        }, 1000);
}
startTimer()

function quizFin() {
    clearInterval(time);
    //let endScore = document.querySelector('#yourScores');

    localStorage.setItem('userScore', time);

    window.location.replace("./leaderboard.html");
}



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
        answer: 'Curly Brackets',
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
                    console.log(time)
                } else {
                    console.log('incorrect')
                    questionNum = questionNum + 1;
                    question.innerHTML = questions[questionNum].question
                    for (let i = 0; i < choices.length; i++) {
                        choices[i].innerHTML = questions[questionNum].choice[i]
                    //deducts time if answered wrong
                        time -= 2.5;
                        console.log(time)
                    }
                }
        //Last Question
            } else {
                if (e.target.innerHTML === questions[questionNum].answer) {
                    console.log('correct')
                    quizFin();
                    window.location.replace("./leaderboard.html")
                    console.log(time)
                } else {
                    console.log('incorrect')
                //deducts time if answered wrong
                    time -= 2.5;
                    console.log(time)
                    quizFin();
                    window.location.replace("./leaderboard.html")
                }
            }
        })
    })
}


startGame()
queChanger()
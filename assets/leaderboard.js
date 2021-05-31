var initials = document.querySelector('#initials');
var scoreBtn = document.querySelector('#scoreBtn');
var yourScor = document.getElementById('yourScores')
var userScore = localStorage.getItem('userScore');
var saveBttn = document.querySelector('#scoreBtn');

console.log(userScore);

console.log(yourScor);

function showScore() {
    yourScor.innerHTML = userScore;
}

saveBttn.addEventListener('click', e => {
    localStorage.setItem(initials.value, userScore)
    console.log(JSON.stringify(localStorage))
})


showScore()
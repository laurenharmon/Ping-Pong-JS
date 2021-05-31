// ELEMENT SELECTORS
const playerOnePoints = document.querySelector("#player1");
const playerTwoPoints = document.querySelector("#player2");
const winningScoreSelect = document.querySelector("#winning");
let p1Score = 0;
let p2Score = 0;
let winningScore = 4;
let isGameOver = false;


const buttonP1 = document.querySelector(".player1Button");
const buttonP2 = document.querySelector(".player2Button");
const resetButton = document.querySelector(".reseter");



buttonP1.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            playerOnePoints.classList.add("has-text-primary");
            playerTwoPoints.classList.add("has-text-danger");
        }
        playerOnePoints.textContent = p1Score;


    }
});

buttonP2.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            playerTwoPoints.classList.add("has-text-primary");
            playerOnePoints.classList.add("has-text-danger");
        }
        playerTwoPoints.textContent = p2Score;
    }
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    playerOnePoints.textContent = "0";
    playerTwoPoints.textContent = "0";
    playerOnePoints.classList.remove("has-text-primary", "has-text-danger");
    playerTwoPoints.classList.remove("has-text-primary", "has-text-danger");
    isGameOver = false;
}
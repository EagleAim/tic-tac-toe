const space = document.querySelectorAll("game-square");

const restart = document.getElementById("button-play-again");

const scoreBoard = document.querySelectorAll("scoreboard");

const turnStatus = document.getElementById("turn-tracker");

const winner = [
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 4, 8],
    [2, 4, 6]
];

let moves = ["", "", "", "", "", "", "", "", ""];
let playerTurn = "X";
let running = false;

startGame();

function startGame(){
    space.forEach(space => space.addEventListener("click", spaceClicked));
    restart.addEventListener("click", restartGame);
    turnStatus.textContent = `${playerTurn}'s turn`;
    running = true;
}

function spaceClicked(){
    const spaceSelector = this.getAttribute("game-square");

    if(moves[spaceSelector] != "" || !running){
        return;
    }

    updateSelector(this, spaceSelector);
    checkWinner();
}

function updateSpace(cell, index){
    options[index] = playerTurn;
    space.textContent = playerTurn;
}

function restartGame(){

}

function checkWinner() {

}



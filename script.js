const space = document.querySelectorAll(".game-square");

const restart = document.querySelectorAll("#button-play-again");

const scoreBoard = document.querySelectorAll(".scoreboard");

const turnStatus = document.querySelectorAll("#turn");

const winner = [
    /*horizontal*/
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    /*vertical*/
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    /*diagonal*/ 
    [0, 4, 8],
    [2, 4, 6]
];

let moves = ["", "", "", "", "", "", "", "", ""];
let playerTurn = "X";

function spaceClicked(){

}

function restartGame(){

}

startGame();
function startGame(){
    space.forEach(space => space.addEventListener("click", spaceClicked))
    restart.addEventListener("click", restartGame)
    turnStatus.textContent = "${playerTurn}'s turn"
}


const space = document.querySelectorAll("square-0", "square-1", "square-2", "square-3", "square-4", "square-5", "square-6", "square-7", "square-8");

const restartButton = document.querySelectorAll("button");

const scoreBoard = document.querySelectorAll("scoreboard");

const turnStatus = document.querySelectorAll("turn-tracker");

const xScore = document.querySelectorAll("scoreboard-x");

const oScore =document.querySelectorAll("scoreboard-y");

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
    restartButton.addEventListener("click", restartGame);
    turnStatus.textContent = `${playerTurn}'s turn`;
    running = true;
}

function spaceClicked(){
    const spaceSelector = this.getAttribute("square-0", "square-1", "square-2", "square-3", "square-4", "square-5", "square-6", "square-7", "square-8");

    if(moves[spaceSelector] != "" || !running){
        return;
    }

    updateSpace(this, spaceSelector);
    checkWinner();
}

function updateSpace(space, square){
    moves[square] = playerTurn;
    space.textContent = playerTurn;
}

function changeTurn(){
    playerturn = (playerturn == "X") ? "O" : "X";
    turnStatus.textContent = `${playerturn}'s turn`;
}

function restartGame(){
    playerTurn = "X";
    moves = ["", "", "", "", "", "", "", "", ""];
    playerTurn.textContent = `${playerTurn}'s turn`;
    space.forEach(space => space.textContent = "");
    running = true
}

function checkWinner() {
    let gameWon = false;

    for(let i = 0; i < winner.length; i++){
        const condition = winner[i];
        const space1 = moves[conditions[0]];
        const space2 = moves[conditions[1]];
        const space3 = moves[conditions[2]];

        if(space1 == " " || space2 == "" || space3 == ""){
            continue;
        }
        if (space1 == space2 && space2 == space3){
            gameWon = true;
            break;
        }
    }

    if(roundWon){
        turnStatus.textContent = `${playerTurn} won!`;
        running=false;
    }
    else if (!moves.includes("")){
        turnStatus.textContent = `Tie!`;
        running = false
    }
    else{
        changeTurn();
    }
} 



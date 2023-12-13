const spaces = document.querySelectorAll(".game-square");

const restart = document.querySelectorAll("#button-play-again");

const scoreBoard = document.querySelectorAll(".scoreboard");

const turn = document.querySelectorAll("#turn");

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
    [2, 4, 6],
];

let moves = ["", "", "", "", "", "", "", "", ""]
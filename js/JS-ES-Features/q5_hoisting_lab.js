"use strict";
// Q5 – Hoisting Lab
var score=50;
function announce(){ console.log("Game started"); }
announce();
console.log(score);

let status="ready";
function startGame(){ console.log(status); }
startGame();

const announceArrow=()=>console.log("Game started (arrow)");
const startGameArrow=()=>console.log(status);
announceArrow();
startGameArrow();

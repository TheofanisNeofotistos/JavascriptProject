
// import Example from "./scripts/example";
import Board from "./scripts/board";
import Card from "./scripts/card";
import deck from "./scripts/deck";
import Game from "./scripts/game";


// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main")
//     new Example(main)
// })

document.addEventListener("DOMContentLoaded",() => {
    const container1 = document.getElementById("boardOne")
    const container2 = document.getElementById("boardTwo")

    const newBoard = new Board(container1)
    const newBoard2 = new Board(container2)

    const hand = document.getElementsByClassName('hand')[0]
  
    const game = new Game(newBoard,newBoard2)
    game.runGame()
})
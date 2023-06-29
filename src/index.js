
// import Example from "./scripts/example";
import Board from "./scripts/board";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main")
//     new Example(main)
// })

document.addEventListener("DOMContentLoaded",() => {
    const container = document.getElementById("board")
    const newBoard = new Board(container)
    newBoard.setUpBoard(3)
    
    const discard = document.getElementById("playerDiscard")
})

// import Example from "./scripts/example";
import Board from "./scripts/board";
import Card from "./scripts/card"

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main")
//     new Example(main)
// })

document.addEventListener("DOMContentLoaded",() => {
    const container = document.getElementById("boardOne")
    const newBoard = new Board(container)
    const hand = document.getElementsByClassName('hand')[0]
    const newCard = new Card("followUp","grapple","suplex","Woah what a move!",hand,newBoard)
    const newCard2 = new Card("lead","strike","punch","Woah what a move!",hand,newBoard)
    const newCard3 = new Card("finish","submission","arm-bar","Woah what a move!",hand,newBoard)
})
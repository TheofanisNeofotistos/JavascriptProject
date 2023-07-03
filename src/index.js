
// import Example from "./scripts/example";
import Board from "./scripts/board";
import Card from "./scripts/card";
import deck from "./scripts/deck";


// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main")
//     new Example(main)
// })

document.addEventListener("DOMContentLoaded",() => {
    const container = document.getElementById("boardOne")
    const newBoard = new Board(container)
    const hand = document.getElementsByClassName('hand')[0]
    // const newCard = new Card("lead","grapple","suplex","Woah what a move!",hand,newBoard)


    // let drawnCard = deck[0]

    // new Card(drawnCard.title,drawnCard.type,drawnCard.attribute,drawnCard.img,hand,newBoard)
    // const newCard2 = new Card("lead","strike","punch","Woah what a move!",hand,newBoard)
    // const newCard3 = new Card("lead","submission","arm-bar","Woah what a move!",hand,newBoard)
    // const newCard4 = new Card("followUp","grapple","suplex","Woah what a move!",hand,newBoard)
    // const newCard5 = new Card("followUp","strike","punch","Woah what a move!",hand,newBoard)
    // const newCard6 = new Card("followUp","submission","arm-bar","Woah what a move!",hand,newBoard)
    // const newCard7 = new Card("finish","grapple","suplex","Woah what a move!",hand,newBoard)
    // const newCard8 = new Card("finish","strike","punch","Woah what a move!",hand,newBoard)
    // const newCard9 = new Card("finish","submission","arm-bar","Woah what a move!",hand,newBoard)
})
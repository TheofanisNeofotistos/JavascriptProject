
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

    const newBoard = new Board(container1,1)
    const newBoard2 = new Board(container2,2)

    // const hand = document.getElementsByClassName('hand')[0]
  
    const game = new Game(newBoard,newBoard2)
    game.runGame()


    function openPopup(){
        let popup = document.getElementById("popup")
      popup.classList.add("open-popup")
    }

    function closePopup(id){
        let popup = document.getElementById(id)
      popup.classList.remove("open-popup")
    }

    
    let popup = document.getElementById("openPopup")

    popup.addEventListener("click",()=>{
        openPopup()
    })
    
    let closeButton = document.getElementById("closeButton")

    closeButton.addEventListener("click",()=>{
        closePopup("popup")
    })

    let closeFlashButton = document.getElementById("closeFlashButton")

    closeFlashButton.addEventListener("click",()=>{
        closePopup("flashModal")
    })
})
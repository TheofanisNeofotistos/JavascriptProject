export default class Board {

    constructor(ele){
        this.ele = ele 
        this.handleClick = this.handleClick.bind(this)
        this.setDeck()
        this.setDiscard()
    }


    setUpBoard(row=3){
        const grid = document.createElement('ul')
        grid.classList.add('zones')

        for(let row = 0 ; row < 3 ; row++){
            const zone = document.createElement('li')
            zone.classList.add("zone")

            zone.dataset.row = row
            grid.appendChild(zone)
        }

        this.ele.appendChild(grid)
        grid.addEventListener('click',this.handleClick)
    }

    setDeck(deck){
        const playerDeck = document.createElement('li')
        playerDeck.id ="playerDeck"
        playerDeck.classList.add('myDeck')
        for(let deck = 0 ; deck < 1 ; deck++){

            playerDeck.dataset.deck = deck
            

        }
        this.ele.appendChild(playerDeck)
    }

    setDiscard(n=1){
        debugger
        const playerDiscard = document.createElement('li')
        playerDiscard.classList.add('myDiscard')

        playerDiscard.id ="playerDiscard"
        // const discard = []

        
        // discard.push([])

        
        this.ele.appendChild(playerDiscard)
    }

    


   

    handleClick(e){
        e.preventDefault()
        let zone = e.target 

        this.makeMove(zone)
    }

    makeMove(zone){
        let row = zone.dataset.row

        let pos = [row]

        // this.game.playMove(pos)
    }

}


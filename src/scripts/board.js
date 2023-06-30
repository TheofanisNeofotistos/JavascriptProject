export default class Board {

    constructor(playerBoard){
        this.playerBoard = playerBoard 
        this.handleClick = this.handleClick.bind(this)
        this.zones = document.createElement('ul')
        this.hand = document.createElement('ul')
        this.setDeck()
        this.setDiscard()
        this.playerHand()
        this.diceTray()
        this.setUpZone()
        this.selected = undefined
    }



    setUpZone(row=3){
        
        this.zones.classList.add('zones')

        const types = ["lead", "followUp", "finish"]
        
        for(let row = 0 ; row < 3 ; row++){
            const zone = document.createElement('li')
            zone.classList.add("zone")

            zone.addEventListener('click',this.handleClick)
            
            zone.dataset.type = types[row]
            zone.dataset.occupied = false 
            zone.dataset.row = row
            this.zones.appendChild(zone)
        }
        
        this.playerBoard.appendChild(this.zones)
    }

    handleClick(e){
        debugger
        e.preventDefault()
        let zone = e.target 

        this.makeMove(zone)
    }

    makeMove(zone){

        if(this.isValidMove(zone)){
      
        this.selected.HTMLElement.remove()
        
        const card = document.createElement("li")
        card.classList.add('card')
        card.classList.add(this.selected.cardObj.type)
        card.classList.add(this.selected.cardObj.attribute)
        

        zone.dataset.occupied = true 

        

        zone.appendChild(card)
        
        } else {
            console.log("Not a valid move!")
        }
    
        
    }
    
    setDeck(deck){
        const playerDeck = document.createElement('li')

        playerDeck.classList.add('deck')

        this.playerBoard.appendChild(playerDeck)
    }

    setDiscard(n=1){
        // debugger
        const playerDiscard = document.createElement('li')
        playerDiscard.classList.add('discard')

        this.playerBoard.appendChild(playerDiscard)
    }

    playerHand(n=1){
        // debugger
        this.hand.classList.add('hand')

        this.playerBoard.appendChild(this.hand)
        
        this.hand.addEventListener("click",this.grabCard)
    }

    diceTray(n=1){
        const diceTray = document.createElement('li')

        diceTray.classList.add('diceTray')
    
        this.playerBoard.appendChild(diceTray)
    }

    isValidMove(zone){
        const zoneType = zone.dataset.type
        const cardType = this.selected.cardObj.type

        if(zoneType === cardType){
            return true 
        } 
        return false 

    }

    

    


}


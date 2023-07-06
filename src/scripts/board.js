import deck from "./deck"
import Card from "./card"
import Game from "./game"



export default class Board {

    constructor(playerBoard,number){
        this.playerBoard = playerBoard 
        this.number = number
        this.handleClick = this.handleClick.bind(this)
        this.zones = document.createElement('ul')
        this.hand = document.createElement('ul')
        this.deck = [...deck]
        this.setDeck()
        this.setDiscard()
        this.playerHand()
        this.diceTray()
        this.setUpZone()
        this.selected = undefined


    }


    // shuffle(deck) {
    //     let currentIndex = deck.length,  randomIndex;
      
    //     // While there remain elements to shuffle.
    //     while (currentIndex != 0) {
      
    //       // Pick a remaining element.
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex--;
      
    //       // And swap it with the current element.
    //       [deck[currentIndex], deck[randomIndex]] = [
    //         deck[randomIndex], deck[currentIndex]];
    //     }
      
    //     return deck;
    // }



    setUpZone(row=3){
        
        this.zones.classList.add('zones')

        const types = ["lead", "followUp", "finish"]

        
        
        for(let row = 0 ; row < 3 ; row++){
            const zone = document.createElement('li')
            zone.classList.add("zone")

            zone.addEventListener('click',this.handleClick)
            
            zone.dataset.type = types[row]
            zone.id = types[row] + this.number
            zone.dataset.occupied = false 
            zone.dataset.row = row
            this.zones.appendChild(zone)
        }
        
        this.playerBoard.appendChild(this.zones)
    }

    handleClick(e){
        
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
        card.style.backgroundImage = `url(${this.selected.cardObj.img})`
        

        zone.dataset.occupied = true 

        

        zone.appendChild(card)
        this.selected = undefined
        this.game.swapTurn()
        this.game.startTurn()


        } else {

           
            this.openFlashModal("Invalid Move!")
            
        
            
            
        }
    
    
        
    }

    openFlashModal(string){

        let error = document.getElementById("flashModal");
            error.getElementsByTagName("p")[0].innerText = string
            error.classList.add("open-popup")
    }


    
    setDeck(deck){
        const playerDeck = document.createElement('li')

        playerDeck.classList.add('deck')

        this.playerBoard.appendChild(playerDeck)

       
    }

    setDiscard(n=1){
        
        const playerDiscard = document.createElement('li')
        playerDiscard.classList.add('discard')

        this.playerBoard.appendChild(playerDiscard)
    }

    playerHand(n=1){
     
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
            

            
            const leadZone = document.getElementById('lead'+ this.number)
            const followUpZone = document.getElementById('followUp' + this.number)
            
            if(zone.dataset.type === "followUp"){
               
                if(leadZone.dataset.occupied === 'true'){
                    return true
                }else {
                    this.openFlashModal("No Lead in play!")

                    return false 
                }
            }
            
            if(zone.dataset.type === "finish" ){
                
                if(followUpZone.dataset.occupied === 'true' && leadZone.dataset.occupied === 'true'){

                    this.openFlashModal("YOU WIN!!!!")

                    return true
                }else {
                   
                    this.openFlashModal("No Follow Up in play!")
                
                    return false 
                }
            }
            
            return true 
        } 
            
        return false

    }

    drawCard(deck){
      let drawnCard = this.deck.pop()

      new Card(drawnCard.title,drawnCard.type,drawnCard.attribute,drawnCard.img,this.hand,this)


    }

    

   



}





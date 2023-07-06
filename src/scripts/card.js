export default class Card{

    constructor(title,type,attribute,img,container,board){
        this.type = type 
        this.attribute = attribute
        this.title = title 
        this.img =img
        this.container = container
        this.board = board
        this.handleClick = this.handleClick.bind(this)
        this.setupCard()
        

    }

    setupCard(){
        const card = document.createElement("li")
        card.classList.add('card')
        card.classList.add(this.type)
        card.classList.add(this.attribute)

        card.style.backgroundImage = `url(${this.img})`
        
       

        card.addEventListener("click",this.handleClick)

        this.container.appendChild(card)


    }

    handleClick(e){

        const turnPlayer = this.board.game.turnPlayer

        
        e.preventDefault()
        let selectedCard = e.target

        if(turnPlayer === this.board){

       if( this.board.selected !== undefined){
        this.board.selected.HTMLElement.classList.remove('selected')
       }

       this.board.selected = undefined

        selectedCard.classList.add('selected')

       

       this.board.selected = {HTMLElement: selectedCard , cardObj: this}
        } else {
           
            let error = document.getElementById("flashModal");
            error.getElementsByTagName("p")[0].innerText = "Sorry! You are not the current player!"
            error.classList.add("open-popup")
        }
      
    //    debugger
    }

  

    
}
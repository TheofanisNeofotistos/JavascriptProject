export default class Card{
    constructor(type,attribute,title,flavor,container,board){
        this.type = type 
        this.attribute = attribute
        this.title = title 
        this.flavor = flavor 
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
       

        card.addEventListener("click",this.handleClick)

        this.container.appendChild(card)


    }

    handleClick(e){
        e.preventDefault()
        debugger
        let selectedCard = e.target
        selectedCard.classList.add('selected')

        

       this.board.selected = {HTMLElement: selectedCard , cardObj: this}
      

    }

  

    
}
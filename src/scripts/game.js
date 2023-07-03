export default class Game {

    constructor(boardOne,boardTwo){
        this.boardOne = boardOne
        this.boardTwo = boardTwo

        this.boardOne.game = this
        this.boardTwo.game = this


    }

    runGame(){
        this.boardOne.drawCard()
        this.boardOne.drawCard()
        this.boardOne.drawCard()

        this.boardTwo.drawCard()
        this.boardTwo.drawCard()
        this.boardTwo.drawCard()

        this.startTurn()
        // this.playCard()
        // this.gameOver()

    }

    startTurn(){

        let turnPlayer = undefined
        // if(boardOne.diceRoll() > boardTwo.diceRoll()){
        if(true){
            turnPlayer = this.boardOne;
        }
        else {
            turnPlayer = this.boardTwo;
        }
      
        turnPlayer.drawCard()

        
    }

        












  
    finisherPhase(){
        let finisher = undefined
        
        finisher = turnPlayer.diceRoll()

        let pinCount = 1

        while(pinCount <= 3){
            let kickoutRoll = !turnPlayer.diceRoll()

            if(kickoutRoll >= finisher){
                console.log("KICKOUT")
                resetBoard()
            } else if(kickoutRoll < finisher){
                console.log(pinCount)
            }
            console.log("WINNER!!!")
            gameOver()
        }
    }
}
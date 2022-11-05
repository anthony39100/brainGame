import {Random} from './random.js'
import{domContent} from './domContent.js'
import{eventListener} from './eventListerner.js'
import{numberSuitGame} from './numberSuitGame.js'

let rand=new Random();
let event = new eventListener()
let game = new   numberSuitGame();
let dom = new domContent();
let test = null




let numberSuit =  game.createNumberSuit(4);
console.log(numberSuit) 



let cels=dom.selectElements('.numberSuit')
let listSuit = game.getNumberSuit()

let startGame=dom.addNumberSuit(cels,listSuit)   
let orderNumberSuit = game.createdOrderSuit(listSuit)
setTimeout( game.hiddenNumber, 3000)
for(let cel of cels){
     event.createdEvent(cel,'click', game.checkedSelection)
}


export {orderNumberSuit,cels,startGame}
    

//position de départ




//fin de la position initiale



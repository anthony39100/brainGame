import { Random } from './random.js'
import { orderNumberSuit, cels } from './main.js'
import { domContent } from './domContent.js'
class numberSuitGame {
    constructor() {
        this.suit = []

        this.number = 1

    }
    createNumberSuit(numberSuit) {

        while (this.number <= numberSuit) {

            let rand = new Random().createdRandom(1, 9);

            if (this.suit.includes(rand) && rand < 11) {
                console.log('nombre dupliqué ')
                this.number--
            }
            else {
                this.suit.push(rand)
            }
            this.number++
        }
        return this.suit

    }
    restartGame() {
        let remove = cels
        for (let removes of remove) {
            removes.dataset.suit = "";
        }
    }
    createdOrderSuit(suit) {
        let compare = new Random().compareNumbers
        return suit.sort(compare)
    }

    checkedSelection(selection) {
        let select = parseInt(selection.target.dataset.suit);
        if (select === orderNumberSuit[0]) {
        } 
        else 
        {
            console.log('mauvais chiffre')
        }
    }
    hiddenNumber() {
        let remove = cels
        console.log(remove)
        for (let removes of remove) {
            removes.innerText = " ";
        }
    }
    getNumberSuit() {
        console.log(this.suit)
        return this.suit;
    }



}


export { numberSuitGame } 
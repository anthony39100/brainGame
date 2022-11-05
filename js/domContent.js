
import{numberSuitGame} from './numberSuitGame.js'

 
 
 class domContent{
    constructor(i){
        this.i=0
    }
    selectElements(selector){
        return document.querySelectorAll(selector)
    }
    selectElement(selector){
        return document.querySelector(selector)
    }
    addNumberSuit(grids,listSuit){  
    
    let i=0
        while(i < listSuit.length){
                
              if(i <= listSuit.length){
                grids[i].innerText=listSuit[i]
                grids[i].dataset.suit=listSuit[i]
                i++
              } else{
                i=0
              }
            
          
        }
      
    }
  
}

export {domContent}


 class eventListener{
    
    createdEvent(target,type, instruction){
            return target.addEventListener(type,instruction)
    }
    target(){
        return e.target.dataset.numberSuit
    }

   
    
}


export {eventListener}
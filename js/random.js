


 export class Random{

    createdRandom(min,max){
        min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    } 
    compareNumbers(a, b) {
        return a - b;
      }

}



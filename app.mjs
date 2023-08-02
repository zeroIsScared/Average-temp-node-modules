import { tempArray, error} from "./types.mjs";
import * as math from './math.mjs';



const sum = ()=>{
    
console.log(tempArray);
    if(tempArray.length === 0) {

        console.log(`The are no temperatures registred`);
    } 
    else if(tempArray.length === 1) {
        return tempArray[0];
    }
    else if(tempArray.length >= 2){
        let sum = 0;
        let initialValue = 0;

      for(let i= 0; i < tempArray.length; i++) {        
        
        sum = math.add(initialValue,tempArray[i]);
        initialValue = sum;           
      }
      return sum;
    }
}

const average = () => {
return math.div(sum(), tempArray.length);
}

console.log(sum());
console.log(`The average temperature is : ${average()}`);
console.log(`The error is : ${error()}%`);
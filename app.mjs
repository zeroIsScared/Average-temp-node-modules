import { tempArray, error} from "./types.mjs";
import * as math from './math.mjs';


//let sum = math.add(tempArray[0], tempArray[1]);

const sum = ()=>{
    
console.log(tempArray);
    if(tempArray.length === 0) {

        console.log(`The are no tempertures registred`);
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
console.log(`The average temperture is : ${average()}`);
console.log(`The error is : ${error()}%`);
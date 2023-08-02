import temperatures from './temperatures.json' assert {type: "json"};
import {sub, div, mul} from './math.mjs';

 export let tempArray = temperatures.filter(temp => typeof temp === 'number');

 export const error = () => {
    let delta = sub(temperatures.length, tempArray.length);
  // console.log(tempArray.length, temperatures.length, delta);
     return  mul(div(delta, temperatures.length), 100);
 }


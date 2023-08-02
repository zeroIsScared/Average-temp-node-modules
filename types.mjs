import tempertures from './tempertures.json' assert {type: "json"};
import {sub, div, mul} from './math.mjs';

 export let tempArray = tempertures.filter(temp => typeof temp === 'number');

 export const error = () => {
    let delta = sub(tempertures.length, tempArray.length);
    console.log(tempArray.length, tempertures.length, delta);
     return  mul(div(delta, tempertures.length), 100);
 }


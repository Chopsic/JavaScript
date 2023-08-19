// first way to import ==>
// import {a as b,hello,fun,myclass} from "./library.js";   

//Second way to import ===>
import * as lib from './library.js' 
//==> yha humna * sa jo be chija import ho rhi the wo select kr le or as lib sa uska ak similar name rekh dia 
//jab be huma koi be variable,fun,class use krni padi to hum lib.var name ya fun name likh kar use kar sekta hai

//third default function ===>
// import {default as def} from './library.js'  //==> isko as likh sekta hai
import def from './library.js'      //==> or simple koi be name de sekta hai issa ye sirf us default function ko he run krega
def()


console.log(lib.a)

lib.hello();

lib.fun()

let a1 =  new lib.myclass();
console.log(a1.v);
a1.func()
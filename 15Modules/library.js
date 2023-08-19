export default function(){
    console.log("default function")
}

const a = "amit";

function hello(){
        console.log("hello world")
    };

const fun = ()=>{
        console.log("Arrow Function")
    };

class myclass{
        v = "class func"
        func = function(){
            console.log(`This is a ${this.v} function`)
        } 
    }

export{a,hello,fun,myclass}
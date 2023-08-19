// use strict is use for errors
'use strict';

/********************  Talk Aabout ********************
* Numbers
* maths operators [+(plus),-(minus),%(modulo use remender and mostly check no. is even or odd),/(divide),*(multiply),**(power or exponentiation)]
* operator precedence (preference) and associativity rule 
* e in number
* number seperator (_)
* increment operator and decrement operator
* prefix vs postfix
* mixing string and numbers (weird)
* parseInt and parseFloat
* type of operator
* Null and Undefined
* JS math object ----> round, ceil, floor, abs, max, min
* generate random integers using Javascript
* BigInt
* operators that we can use with BigInt

*******************************************************/

// some values are already stored in variables ------------->
console.log(Math.PI)  // it prints value of PI
console.log(Number.MAX_SAFE_INTEGER) // it print max number(2**53-1) that a variable stores
console.log(Number.MIN_SAFE_INTEGER) // it print min number(-2**53-1) that a variable stores

let max = 2**53-1;
console.log(max);

/*---------------->
Operator Precedence         and          Associativity Rule
        ( )                               --------------
      **(power)                           right to left   <------
       *, /, %                            left to right   ------> 
       +, -                               left to right   ------>
*/

console.log(3*5/2%3);  //solve left to right
console.log(15/2%3);
console.log(7.5%3);

console.log((2+3) / 2 + 3**2**2 + (4/2*3) + 3); // here first solve parenthesis
console.log(5 / 2 + 3**2**2 + (2*3) + 3);
console.log(5 / 2 + 3**2**2 + 6 + 3);   // then solve ** right to left
console.log(5 / 2 + 3**4 + 6 + 3);
console.log(5 / 2 + 81 + 6 + 3);    // and the solve divide
console.log(2.5 + 81 + 6 + 3);      // and then plus
console.log(2.5 + 81 + 6 + 3);



// e in numbers ----------->
let x = 1e2;        //it means 1 * 100
console.log(x);

let y = 3.6e-5;       //it means 3.6/ 100000
console.log(y);

let z = 2e6;          //it means 1 * 1000000 
console.log(z);



// Number Seperator ------------>
let a = 36_00_000;  // here _ is use for seprate no.
console.log(a)      // it is equal to 36000000



// Increment and Decrement Operators --------->
let ab = 5;
ab = ab + 2; //increment
console.log(ab);

let ba = 5;
ba = ba - 2; //decrement
console.log(ba);


//prefix and postfix ------------->
// (look like same but actually they are different)

let an = 10;  
console.log(an++);  // in postfix it return same value 10 because it increment 1 after runing this line
console.log(an)     // here it increment 1 and result is 11
console.log(++an);  //  but in prefix it return 12 because it increment 1 instantly before running (because now value of an is 11 by upper line)

let na = 10;  
console.log(na--);   // in postfix it return same value 10 because it decrement 1 after runing this line   
console.log(na);     // here after running upper line it decrement 1 and result is 9   
console.log(--na);   //  but in prefix it return 8 because it decrement 1 instantly before running (because now the value of na is 9 by upper line)



//Mixing strings and Number ---------------->
let num1 = 45;       // if you add a no. with number string then is convert no. into string
let str1 = "45";     // it is a string because it is in quotes withour quotes it becomes a number
console.log(num1+str1)  // and result become 4545

let num2 = 10;
let str2 = "HELLO";
console.log(num2+str2);

let numb = 50;         // and if you -(minus) with a no. with number string then  the string conver into a no. 
let str = "45";       // it is a string because it is in quotes withour quotes it becomes a number  
console.log(numb+str);   // and results become 0



//ParseInt and Parsefloat --------------->
// * it change string"45" into a no. 45 ,
// * and if string start wit no. "10AMIT" they take only no. 10
// * and if string start like thik "AMIT10" they can not seprate no.

// * parseInt seprates Integer number only no decimal number ------>
let ap = 12
let anp = "12.1"        
anp = parseInt(anp);     // parseInt change str into no. but it take only 12 form 12.1 
console.log(ap+anp,"<br>");

let as = 10;
let ans = "13.1HELLO"   // pasreInt seprates the no. only when a string starts with the number but it can not seprate after decimal no. 
ans = parseInt(ans);    // here parseInt also take 13 only, if 13.1 is in the end of string if can not seprate  
console.log(as+ans);

// *parseFloat seprate integer as well as decimal no. from the string ------>
let no = 5;
let on = "4.5";        
on = parseFloat(on);    // parseFloat change string into no. also decimal
console.log(no+on); 

let non = 6;
let nono = "4HELLO"     
nono = parseFloat(nono);    // parseFloat seprates the no. from the string only when str starts with no.    
console.log(non+nono);



//typeof operators ----------------------->
// it means data ka type kya h (variable ka data string h ya number ya fir koi or datatype hai)

let numer = 21;
console.log(typeof(numer));     //result is number
console.log(typeof(4));         //result is number

let strn = "Amit";
console.log(typeof(strn));      //result is string
console.log(typeof("AMIT"))     //result is string
console.log(typeof(AMIT))       //result is undefinded, because we did not use quotes


// null or undefinder ------------------------->
let undef;      //when we make a variable but do not assign a value then it is undefined
console.log(undef);  // result is undefined

let nul = null;     // when we make a variable and we assign a value null(empty) then it become null or empty, 
console.log(nul);    // result is null   



// Math object ----------------------->

// * round  (it is use to round off the decimal values)
let rou = 12.4;     // if the value after decimal is less then 5 then it decreases
console.log(Math.round(rou));

let roun = 12.5;     // if after the decimal value is 5 or more than 5 it increases
console.log(Math.round(roun));   // result is 13

// * floor (it is use for round down the decimal value)
let flor =  45.8;     //floor round down the decimal value of couse the value after decimal is more then 5  
console.log(Math.floor(flor));  //result is 45 

// * ceil  (it is use to round up the value)
let cel = 12.000001;    // ceil round up the value of caurse the value after decimal is less then the 1
console.log(Math.ceil(cel));    //result is 12

// * abs (it is use to convert -ve to +ve values)
let abc = -1325;
console.log(Math.abs(abc));    // abs convers -1325 into 1325 (-ve value to +ve)

// * max
let a1 = 10;
let a2 = 20;
let a3 = 30;
let a4 = 40;
let a5 = 50;
console.log(Math.max(a1,a2,a3,a4,a5)); //* max gives the max no. or greater no. from all

// * min
let b1 = 10;
let b2 = 20;
let b3 = 30;
let b4 = 40;
let b5 = 50;
console.log(Math.min(b1,b2,b3,b4,b5));  //* min gives the min no. or smaller no. from all 



//Generate random integer using JavaScript --------------->
console.log(Math.random());

let randm = Math.random()*10;
console.log(Math.floor(randm));

let minno = 10;
let maxno = 30;
let ranno = Math.random() * (maxno-minno) + (minno);  // <--- ye random no. genderate karna ka formula h DOO No. k bich m 
console.log(ranno);   //isma max wala no. kabhi be nhi ayega 
console.log(ranno+1);   // agar plus 1 karta h to max no. bhi aa jayega
console.log(Math.floor(ranno));  // isma humna floor use kia h round down karna ka lia
console.log(Math.floor(ranno)+1); // isma plus 1 isi lia kia h taki max no. be aa jay



//BigInt ----------------------->
//BigInt islia use karta h kisi bada no. ko store karna k lia jab hamara pass max_safe_integer sa bhe koi bda no. ho

let bi = 9007199254740991n;   // BigInt no. ka lia hama last ma bas n lagana hota h 
bi = bi + 109n;               // BigInt no. ma sirf BigIng no. he plus ho sekta h;
console.log(bi);              // BigInt ma decimal no. use nhi kar sekta ye decimal no. ko ignore karta h ya error throw kar deta h

let big = BigInt(9007199254740991);
big = big + 9007199254740991n;
console.log(big);


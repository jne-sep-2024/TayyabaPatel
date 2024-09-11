//returning functions from the function:
// if the function return the another function called it as hiegher order function:


function sum(a,b){
    return a+b;
}
let add=sum;

function avg(a,b,fun){
    return fun (a,b)/2;
}

let res=avg(23,34,add);
console.log(res);

//Returning functions from functions:

function print(name){
     function greet(){
        console.log("hello " + name);

    }
    greet();
}

print("tayyaba");


 
function cmToIn(length) {
    return length / 2.54;
}

function inToCm(length) {
    return length * 2.54;
}

function convert(fn, length) {
    return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);


//JavaScript Anonymous Functions:function without name its called as anonumous functio:
let function1=function(){
    console.log("hello");
}
function1();


//setTimeout() :take function as an argument:
setTimeout(()=>{
    for(let i=1;i<=10;i++){
        console.log(i);
    }
},2000)

//immediatly invoke:
// (function() {
//     console.log('IIFE');
// })();

//Arrow funcion:
setTimeout(()=>{
    console.log("hiii");
},1000);

 add = (a, b) => a + b;   
console.log(add(23,56));



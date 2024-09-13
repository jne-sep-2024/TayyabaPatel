//CallStack:call stack is a mechanism for keeping track of function calls and their execution. 
//LIFO

function firstFunction() {
    console.log("First function starts");
    secondFunction();
    console.log("First function ends");
}

function secondFunction() {
    console.log("Second function starts");
    thirdFunction();
    console.log("Second function ends");
}

function thirdFunction() {
    console.log("Third function starts and ends");
}

firstFunction();


//satack OverFlow :
// f

//Asynchronous:
console.log("Start");

setTimeout(function() {
    console.log("Timeout");
}, 1000);

console.log("End");

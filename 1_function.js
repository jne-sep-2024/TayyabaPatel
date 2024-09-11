//Functions:block of code used to do some task repeatedly:
//increase code reusability:


//saying something:
function say(greet){
    return greet;
}


function square(a){
    return a*a;
}

function add(a,b){
    return a+b;
}

function msg(){
    console.log("hello this is my msg to you");
}

function fact(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}

//calling all this functions:
console.log(say("hello dear"));
console.log(square(3));
console.log(add(34,67));
msg();
console.log(fact(12));

function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

console.log(compare(34,23));

function say1(message) {
    // show nothing if the message is empty
    if (! message ) {
        return;
    }
    console.log(message);
}

say1();
say1("hello");

//sum of n naturl number:

function sumNum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    console.log(sum);
}

sumNum(67);

//Hoisting of Functions:
//JavaScript engine physically moves function declarations to the top of the code before executing them.

showMe(); // a hoisting example

function showMe(){
    console.log('an hoisting example');
}


//Recursive functions:
//Recusrive functions are call it self:


//Counting the Downnumber:

function countDown(num){
    console.log(num);
    let count= (num-1);
  if(count>0){
    countDown(count);
  }

}
countDown(5);


//Factorail:

function fact(n){
    if(n==0 || n==1 ){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
console.log(fact(5));

//Summation:

function sum(num)
{
    if(num<=1){
        return num;
    }
    else{
        return num+sum(num-1);
    }
}
console.log(sum(-1));

//Fibonacci series:
function fab(n)
{
    if(n==1 || n==1 ){
        return n;
    }
    else
    {
        return n +fab(n-1);
    }
}
console.log(fab(7));

//Default Parameter :


function printName(name="tayyaba")
{
    return name;
}
console.log(printName()); //default value is tayyaba

function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'

function put(item,list=[])
{
    list.push(item);
    return list;

}
console.log(put("apple"));
console.log(put("apple"));
console.log(put("apple"));
console.log(put("apple"));
console.log(put("apple"));
console.log(put("apple"));

function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();

function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4
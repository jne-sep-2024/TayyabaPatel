// var:

var i=0; //having global scope
for(;i<=10;i++){
    console.log(i);
}

var n=78;
for(;i<=n;i++){
    var sum=0;
    sum+=i;
}
//console.log(sum); //sum have functional scope we can not acccess it heree
console.log(name);
var name="saad"; //hoisting declared name at the to not initialization
var name="tayyaba"; //can redeclared and reinitialize


//let:
{
    let fname="tayyaba"; //functional scope
    console.log(fname); //can access it here
    // let fname="hello";//can not redeclared in same block
    fname="hello"; //reinitialize
}
//console.log(fname); //can not access it here
console.log(lname);  //give an errror not follow hoisting
let lname="patel";







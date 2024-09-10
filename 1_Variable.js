//Variables:variables ara container in which we store the value:
//we can change the value of variable:

//to find the area radius is variable:
//js is dynamically type language no need to write the type of data:
//js interpreter identifies the type of data at run time
//= :(assignment operator)
//we can give any name to variable but follow name convention:


let r=6.7; //point value
const pi=3.14; //point value with const
let area=pi*r*r;
console.log("area of given radius is "+ area);
let age=90; //whole number
let name="tayyaba"; //string
let x=null; //special value having no value (empty)
let y=undefined; //dont know which value store in undefine
let bool1=true;  //boolean values
let bool2=false; //boolean values
console.log(x);
console.log(y);
console.log(age);
console.log(name); 
console.log(bool1); 
console.log(bool2);


//rules to create the name of variable :

//1)name are case sensitive:
let var1=56; //both are different
let Var1=78;
console.log(var1);
console.log(Var1);

//2)only alphabets,digits,underscore and dollar are allowed:
let a1;
let $="dollar";
console.log($);

//3)first letter should be alphabet,underscore(_),dollar($)
let first="tayyaba";
let _first="hii";
let $first="hello";
//let 89first=90; not allowed

//4)reserved word(keywords ) not allowed for variable name:
//let let=56; not allowed let is keyword

//keywords in js :(break,case,catch,class,const,var,let,default,delete,else,import etc)

//name conventions:
//camel case:

let firstName="tayyaba";
let lastName="patel";
let isFollow=true;
console.group(firstName);
console.group(lastName);
console.group(isFollow);

//keyword to declared variables:
//1)let :having blocked scope ,can not redeclared,can reassign
//2)const :having blocked scope,can not redeclared and reassign
//3)var : having global or functional scope ,can redeclared also re assign and re initialize

//ES6(ECMA SCRIPT 6):(let introduce in this )

//1)var:
var a=90; //not give any error create the confusion
var a=78;
var a=67;
console.log(a);

//2)let:
let b=90;  
//let b=89; //can not redeclared
b=800; //can re assign
console.log(b);

//3)const:
const PI=3.14; //can write capital latter
const GRAVITY=9.8;
console.log(PI);
console.log(GRAVITY);

//by default value of declared variable=undefine;
let a2;
console.log(a2);

//const decalartion must be initialize:
//const con; //give error



//scope of variables:
//var:global:

{
    var z=90;
}
console.log(z);

//let : blocked scope 
{
    let z1=90;
}
// console.log(z1); give the error 

{
    let z1=89;
    console.log(z1);
}















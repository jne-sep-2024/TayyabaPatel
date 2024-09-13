//Logical Operator:
//! (Logical NOT)
//|| (Logical OR)
//&& (Logical AND)

//1)The Logical NOT operator (!):
let eligible = false,
    required = true;

console.log(!eligible);//true
console.log(!required);//false

//undefined:
let a=undefined;
console.log(a); //undefine
console.log(!a); //true

//Null
a=null;
console.log(a);
console.log(!a); //true

//NaN
a=NaN;
console.log(a);
console.log(!a); //true

//Object:
a={
};
console.log(a);
console.log(!a);

a={
    name:"tayyaba"
}
console.log(a);
console.log(!a); //false

//String
a="tayyaba";
console.log(a);
console.log(!a); //false
a="";
console.log(a);
console.log(!a); //true

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

//Double navigation(!!):
let counter = 10;
console.log(!!counter); // true

//2) The Logical AND operator (&&):
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //shortcircuit(not check second condition)
console.log(false&& false); //shortcircuit(not check second condition)

let eligible1 = false,
     required1 = true;

console.log(eligible1 && required1); // false

//infinity:
let b = true;
let result = b && (1 / 0); //here it check second conditiondue to this infinity occure
console.log(result);

//false output:
b = false;
result = b && (1 / 0); //not check second condition
console.log(result); //false

//three operandS:
console.log(true && false && true);//left to right
console.log(false&&false&&true); //false(ignore the remaining conditions)

//3) The Logical OR operator (||)

console.log(true||true); //true
console.log(true||true); //true
console.log(true||false); //false
console.log(false|| true); //shortcircuit(not check second condition)
console.log(false||false);

//true:
 b = true;
 result = b || (1 / 0); //only check first condition due to shortcircuit
console.log(result);

//infinity:
b = false;
 result = b || (1 / 0); //infinity:
console.log(result);

//three operandS:
console.log(true || false || true);//left to right
console.log(false||false||true);
//DataType: type of the data or kind of the data which is stored in variable:
//there are two types of data:1)primitive dt 2)non primitive dt


//there are 7 types of primitive datatypedatatypes in js:
//1)number:whole number as well as decimal value:
let age=90;
console.log(typeof (age));
const pi=3.14;
console.log(typeof(pi));
let  num1=45.0000;
console.log(num1);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE + Number.MAX_VALUE);
console.log(Number.MIN_VALUE + Number.MIN_VALUE);

//2)String:
let name="tayyaba";
console.log(typeof(name));
let str='JavaScript';
str[0]='j'; //not update
console.log(str);

//3)boolean:
let isFollow=true;
console.log(typeof(isFollow));
let isNull=false;
console.log(typeof(isNull));
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

//4)undefined:
let x;
console.log(typeof x);
//5)BigInt:
let y=BigInt("123");
console.log(typeof y);

//6)Null:
let value1=null;  //give the output as an object
console.log(typeof value1);
console.log(null == undefined); // trueconsole.log(null == undefined); // true

//7)symbol:
let y1=Symbol("brtsn");
console.log(typeof y1);
console.log(Symbol() == Symbol()); // false


//NaN(Not a Number):
console.log('a'/6); //give nan as output
console.log(NaN==NaN); //false

//Non primitive datatype:

//1)object : collection of values store key value pairs
//we can update the values of key even we declared it const:

const student=
{
    name:"tayyaba",
    age :22,
    cgpa : 9.3,
    isPass: true
};
console.log(student);
console.log(typeof(student));
//access values by key:
console.log(student.age);
console.log(student["name"]); //need to write colon

//to cahnge the values of an object:
console.log(student["age"]+3);
console.log(student["name"]="saad");


//2)arrays :
//3)functions :
//Number : it is primitive data type .
// in which we can stored integers,decimal etc:
// new primitive type bigint having range :253 – 1.



//1)Integer Number :
let counter = 100;
console.log(counter);

// ntegers can be represented in the following formats:
//a) Octal (base 8) :starts with the digit 0o
let num = 0o71;
console.log(num);
counter=0o100;
console.log(counter);

//b) Hexadecimal (based 16):start with 0x or 0X 
num=0x71;
console.log(num);
counter=0x100;
console.log(counter);
num = 0x1a;
console.log(num);


//2)Floating point number :
let price = 9.99;
let tax = 0.08;
let discount = .05;
console.log(price);
console.log(tax);
console.log(discount);

//When you have a very big number, you can use e-notation.
let pi=3.14e7;
console.log(pi);
let amount = 9.14e7;
console.log(amount);
amount = 5e-7; 
console.log(amount);

amount = 0.2 + 0.1;
console.log(amount);

//3)BigInt :bigint type stores whole numbers whose values are greater than 253 – 1.
//having n character so write n at last :
let pageView = 9007199254740991n;
console.log(pageView);

//Numeric Saprator: _ is used to saparate large number, increase the readability
num=120_45_56_677;
console.log(num);

// BigInt
const max = 9_223_372_036_854_775_807n;
console.log(max);

// binary
let nibbles = 0b1011_0101_0101;
console.log(nibbles);

// octal
let val = 0o1234_5670;
console.log(val);

// hex
let message = 0xD0_E0_F0;
console.log(message);

//also used for decimal values :
amount = 0.000_001;
console.log(amount);

//Binary Litral,octal Litral,Hexadecimal Litral:

//octal
//num=0567;//give an error
num=0o567;
console.log(num);

// let d = 0o58; //due to presence of 8 (0,7)
// console.log(d); // SyntaxError

//Binary litrals:
let e = parseInt('111',2);//(ES5)
console.log(e); // 7
let num3=parseInt('11110',2);//to parse a binary string, you use the parseInt() function


console.log(num3); //ES6 
let f = 0b111;
console.log(f); // 7

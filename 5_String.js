//strings:primitive dt,immutable,can write single and double quote:

let firstName="Tayyaba";
let lastName='Patel';
let date='06/11/2024';

//string litrals: `    `
let greet=`hello dear !!
           ${firstName +" "+ lastName} !!!!
                You can join us to ${date}.....`;
console.log(greet);

//escaping special Char:
let str = 'I\'m a string!';
console.log(str);
str = 'I\'m a string! .....\n hii\t hello\\';
console.log(str);
str = 'I\'m a string!\"tayyaba\"';
console.log(str);

//getting length : (.length)
console.log(firstName.length);
console.log(lastName.length);
console.log(str.length);

//accessing the characters:
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[3]);
console.log(firstName[2]);
console.log(firstName[firstName.length-1]); //last char

//concatenation:(+=)
let className = 'btn';
className += ' btn-primary'
className += ' none';
console.log(className);
let fullName=firstName+" "+lastName;
console.log(fullName);

//converting into string:

//1)String(n):
let num1=890;
num1= String(num1);
console.log(typeof num1);

//2)” + n
//num1=num+"1234";

//3)n.toString() :Note that the toString() method doesn’t work for undefined and null
//Note that only the string for which the Boolean() returns false, is the empty string ('');
let status = false;
let str1 = status.toString(); // "false"
let back = Boolean(str1); // true
console.log(typeof status);
console.log(typeof str1);
console.log(typeof back);
console.log(status);
console.log (str1);
console.log (back);

//Comparing strings:(==,<=,>=,>,<)
let result = 'a' < 'b';
console.log(result); // true
let result1 = 'a' < 'B';
console.log(result1); // false





//nullish coalescing :ignore the null,undefined values :
//(??):

const name = null ?? 'John';
console.log(name); // 'John'

const age = undefined ?? 28;
console.log(age);

let count;
let result = count || 1 ;
console.log(result); // 1

 result = 1 ?? console.log('Hi');
 
 result =( null || undefined )?? 'OK'; // Braces are mendatoory


 //Exponetial:
 result = Math.pow(2,2);
console.log(result); // 4

result = Math.pow(2,3);
console.log(result); // 8

//or:(**)
console.log(2**3);
result = 2n ** 3n;
console.log(result); // 8n
let x = 2;
x **= 4;
console.log(x); // 16

//negative values:
// let result = -2**3; //error
result=(-2)**6;
console.log(result);



 
 

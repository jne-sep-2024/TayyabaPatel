//Ternary Operator:take three operands:

let res=true?"its true":"its false";
console.log(res);

let age = 18;
let message;
message = age >= 16 ? 'You can drive.' : 'You cannot drive.';
console.log(message);

let authenticated = true;
let nextURL = authenticated? (('You will redirect to admin area'), '/admin'): (('Access denied'), '/403');

// redirect to nextURL here
console.log(nextURL); // '/admin'


//multiple ternary operator :

let num1=678;
let num2=89;
let num3=56;

let greater= num1>num2 ? (num1>num3? `the greatest number is ${num1}`:`the greatest number is ${num1}`):(num2>num3? `the greatest number is ${num2}`:`the greatest number is ${num3}`);
console.log(greater);
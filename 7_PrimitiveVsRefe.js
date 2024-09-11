//primitive variable:immutable 
// Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
let name = 'John'; //two defferent variable created in stack
let age = 25;
console.log(name.alias); // undefined

//copying value :
let newAge = age; //another variable will be created
newAge = newAge + 1;
console.log(age, newAge);

//can be update only reference hold by variable
let person = {
  name: 'John', 
  age: 25,
};
// add the ssn property
person.ssn = '123-45-6789';

// change the name
person.name = 'John Doe';
// delete the age property
delete person.age;
console.log(person);

//copying the object:
let member = person;
member.age = 26;
console.log(person);
console.log(member);
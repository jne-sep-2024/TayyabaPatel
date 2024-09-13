//Strings in js:collection of character

//strings can write in single quote and double quotes
let firstName="Tayyaba";
console.log(firstName);
let lastName='patel';
console.log(lastName);
console.log(firstName.length);
console.log(lastName.length);
console.log(firstName[0]); //index of string starts with 0
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);
console.log(firstName[4]);

//template litrals: ${} (string interpolation) ``
console.log(`my name is ${firstName+" " +lastName}`);

//Escape squance characters:(\)
let fruit="bana\'na"
console.log(fruit);


//Method to write String:
let str1 = "Hello World";   // Double quotes
let str2 = 'Hello World';   // Single quotes
let str3 = `Hello World`;   // Template literal
console.log(str1);
console.log(str2);
console.log(str3);

//Find the length:
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

//String Methods:

//1)charAt();
console.log(str1.charAt(3));
console.log(str2.charAt(2));
console.log(str3.charAt(5));

//2)charCodeAt():
console.log(str1.charCodeAt(3)); //give unicode of l
console.log(str2.charCodeAt(2));
console.log(str3.charCodeAt(5));

//3)concat():
console.log(str1.concat(" ",str2)); 

//4) includes():
let str = "JavaScript is awesome";
console.log(str.includes("awesome"));  // Output: true


//5)endsWith:

//let str = "JavaScript";
console.log(str.endsWith("Script"));  // Output: true



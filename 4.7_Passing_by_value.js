//Passing by value :

function modifyValue(num) {
    num = num + 10;  // Modify the copy of the value
    console.log("Inside function: ", num);  // Inside function: 20
}

let originalNumber = 10;
modifyValue(originalNumber);

console.log("Outside function: ", originalNumber);  // Outside function: 10


function changeString(str) {
    str = str + " World";  // Modify the copy of the string
    console.log("Inside function: ", str);  // Output: Hello World
}

let originalString = "Hello";
changeString(originalString);

console.log("Outside function: ", originalString);  // Output: Hello

// Closures:allows a function to access variables from its lexical environment (the scope where the function was created) 

function outerFunction() {
    let outerVariable = "I am outside!";
    
    function innerFunction() {
      console.log(outerVariable); // Can access the outerVariable
    }
    
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction();  // Output: "I am outside!"
  
  function counter() {
    let count = 0;  // Private variable
    
    return function() {
      count++;      // Inner function modifies the outer variable
      return count;
    }
  }
  
  const increment = counter();
  console.log(increment());  // Output: 1
  console.log(increment());  // Output: 2
  console.log(increment());  // Output: 3
  

  function delayedMessage(message, delay) {
    setTimeout(function() {
      console.log(message);
    }, delay);
  }
  
  delayedMessage("Hello after 1 second", 1000);  // Output after 1s: "Hello after 1 second"
  
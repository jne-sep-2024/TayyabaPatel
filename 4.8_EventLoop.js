console.log("Start");

setTimeout(function() {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(function() {
    console.log("Promise resolved");
});

console.log("End");

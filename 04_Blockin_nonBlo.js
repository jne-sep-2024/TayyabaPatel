let fs=require("fs");

//Blocking .....
console.log("1");
let res=fs.readFileSync("./test.txt","utf-8");
console.log(res);
console.log("2");

//Non-Blocking code:

console.log("A");
fs.readFile("./test1.txt","utf-8",(err,res)=>{console.log(res)});
console.log("B");

//Default thread Pool size=4
let os=require("os");
console.log(os.cpus().length);  //4
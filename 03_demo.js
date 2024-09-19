module.exports=demo=()=>{console.log("Hello Funcyion")};

//const { log } = require("console");
let fs=require("fs");

//Synchronous :
let res=fs.writeFileSync("./test.txt","Helllo Dear !!!");
console.log(res);

//Asynchronous :
console.log(fs.writeFile("./test1.txt","Node Js ",(err)=>{}));

//Synchronous Read:
let read=fs.readFileSync("./contact.txt","utf-8");
console.log(read);

//Asynchronous Read:
console.log(fs.readFile("./test.txt","utf-8",(err,res)=>{if(err)console.log(err);else console.log(res)}));

// Async Append :
fs.appendFileSync("./test.txt",`${Date.now()} Hello \n `);

//copy:

fs.copyFileSync("./test1.txt","./demo.txt");

//delete:
fs.unlinkSync("./demo.txt");

//status:
console.log(fs.statSync("./test.txt"));

//my direct:
fs.mkdirSync("./my-docs");
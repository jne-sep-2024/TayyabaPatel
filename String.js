// String:

let name="Tayyaba"; //primitive datatype
let fname="Tayyaba";//primitive dataype (string in same memory string enterning )
console.log(name==fname); //true
console.log(name===fname); //true

let str=new String("Patel"); //different object  references
let str1=new String("Patel");
console.log(str==str1); //false
console.log(str===str1); //false 

// ==(compair after type coesion)
let flower=new String("Rose");
let flower1="Rose";
console.log(flower==flower1);  //conver object reference into primitive type(true)

//===(compare before type coesion)
console.log(flower===flower1);  

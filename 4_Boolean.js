//Boolean datatype :having logical value (ture or false)
let isNull=true;
console.log(isNull);
 isNull=false;
 console.log(isNull);
 console.log(typeof(isNull)); //  boolean


 //Boolean Object:boolean primitive type provides you global Boolean Function.
 let str=Boolean("hello"); //boolean dt
 console.log(typeof str);

 //Boolean is also a wrapper object of the boolean.due to this it create boolean object:
 let b = new Boolean(false);
 console.log(b.valueOf());
 //convert into string
 console.log(b.toString()); //in string formate

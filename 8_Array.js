//Array:used to hold collection of different types of element:
// hold values of mixed types ,  the size of an array is dynamic and auto-growing.

//creation of array:
  //1)by constructor :
   let arr=new Array();
   console.log(arr);
   arr=new Array(10,20,30,40);
   console.log(arr);
   arr=new Array('red','green','blue',12,false,null,undefined);
   console.log(arr);

//JavaScript allows you to omit the new:
let list=Array(1,2,3,4,5,6);
console.log(list);

//2)Second method :
let arr1=[2,4,78,67,90,'hii'];
console.log(arr1);
let emptyArray = [];
console.log(emptyArray);

//accessing Array element by index:
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
//changing the value :
arr[2]='tayyaba';
console.log(arr);

//finding length:
console.log(arr.length);
console.log(arr1.length);
console.log(list.length);
console.log(emptyArray.length);
console.log(arr.length);

//basic operations on array:
//1)Adding an element to the end :
arr.push(678);
console.log(arr);
//2)adding an element to the start:
arr.unshift(4569);
console.log(arr);
//3)delete arr at last:
arr.pop();
console.log(arr);
//4)delete element starting
arr.shift();
console.log(arr);
//finding indexof:
let index=arr.indexOf('red');
console.log(index);
console.log(arr.indexOf('tayyaba'));
//check it is array or not:
console.log(Array.isArray(arr));
console.log(Array.isArray(emptyArray));
let a=90;
console.log(Array.isArray(a)); 
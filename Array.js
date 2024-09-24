//Array:

//creation :
let arr=[1,2,3,4,4,5,67,"tayyaba",true,undefined,null];
console.log(arr);

let flower=new Array();
flower.push("rose");
// flower.push("rose");
// flower.push("rose");
// flower.push("rose");
// flower.push("rose");
// flower.push("rose");
console.log(flower);

let fruits=[];

//methods :push():returns length of an array:
flower.push("Jasmin");
console.log(flower.length);
flower.push("mogra");

//pop():return the poped value:delte last value
flower.pop();
console.log(flower);
console.log(flower.pop()); 

//Shift ():delete the first element of an array and return it:
arr.shift();
console.log(arr);
console.log(arr.shift()); //return the element

//unshift(): add the element at the starting
arr.unshift("Patel");
console.log(arr);
console.log(arr.unshift("hiii"));  //return the length

//slice(): return the shadow of array
let arr1=[1,2,3,4,5,6];
let newArr=arr1.slice(1,3);
console.log(newArr);  //return the new Array

//splice():remove ,delete ,add
arr1.splice(0,2,"Tayyaba","Patel"); //not return new Array
console.log(arr1);
arr1.splice(0,2,"Patel");
console.log(arr1);

//concat():conact two arr: return the new Array
let array1=[1,2,3,4,5];
let array2=[6,7,8,9,10];
array1=array1.concat(array2);
console.log(array1)
console.log(array2)

//forEach():modify or goes to each element: not return any array
let newArray1=array1.forEach((element)=>{
    console.log(element);
    element=element*3;
    console.log(element);
})
console.log(newArray1); //undefined

//map():return the an array:
let newArray2=array1.map(element=>element*2);  //return the array
console.log(newArray2);
console.log(array1);

//filter():filter the element: return thr new Array
let newArray3=array1.filter((num)=>{if(num%2==0) return num; }) 
console.log(newArray3);
console.log(array1);

// reduce():shrink the array return the single value
let numbers=[1,2,3,4];
let sum=numbers.reduce((acc,element)=> acc+element,0);
console.log(sum);

//find():find the first occurance if not present then return the undefined:
let odd=numbers.find((num)=> num%2==1);
console.log(odd);

//sort():return sorted string :defaukt sort is an string:
let strArr=["A","S","P"];
let sortedStr=strArr.sort();
let sortedArray=numbers.sort();
console.log(sortedArray);
console.log(sortedStr);

//includes():return the true or false values :
console.log(strArr.includes("A"));
console.log(numbers.includes(2));

//some():check at least one condition is true:
let someArray=[6,6,2,3,3,90];
console.log(someArray.some((el)=>el%2==0));
console.log(someArray.some((el)=>el%7==0));

//every():
console.log(someArray.every(ele=>ele%2==0));
console.log(someArray.every(ele=>ele%1==0));

//example:
let users = [
    { name: 'John', age: 22, role: 'user' },
    { name: 'Jane', age: 19, role: 'admin' },
    { name: 'Tom', age: 18, role: 'user' }
  ];
  
  // Check if all users are above 18
  let allAdults = users.every(user => user.age > 18);
  console.log(allAdults);  // false (because Tom is exactly 18)
  
  // Check if at least one admin exists
  let hasAdmin = users.some(user => user.role === 'admin');
  console.log(hasAdmin);  // true (because Jane is an admin)
  











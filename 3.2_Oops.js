//object oriented programming:
//it is way or paradigm to write the code :

//object:having properties and behavior.

//direct way to creating an object:
const student={
    name:"tayyaba",
    age:21,
    marks:94.4,
    printMarks: function (){
        console.log(`your marks is : ${this.marks}`);  //refer the this object
    }
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.printMarks());

//Prototype:each object having thier own prototype having some properties and method:
console.log(student.toString());
console.log(student.valueOf());
console.log(student.length);

let arr=new Array(12,34,56,78,89);
console.log(arr);
console.log(typeof arr); //object
console.log(arr.length);
arr.push(567); //present in prototype
arr.push(7);  //present in prototype
arr.unshift(6770);  //present in prototype
console.log(arr);  

//creating the prototype: reference of object
console.log(Object.prototype.constructor === Object); // true 
const employee =
{
    calTax:function (){
        console.log("calculate the tax : 10%");
    }
}

const tayya={
    salary:50000
};
tayya.__proto__= employee; //used to set a prototype we can use the function of employee
tayya.calTax();

let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};

person.greet();

let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person1.getFullName());

//classes and constructor:
//classes are template or blue print to create an object:

class className
{
    constructor(){ 
        //same as method having no name 
        //automatically invoke 

    }
    myMethod(){

    }
}

class Car{
    constructor(){
        console.log("creating new object :");
    }
    setColor(c){
        this.color=c;
        console.log(this.color);
    }
    
    start(){
        console.log("atart the car :")
    }
    stop(){
        console.log("stop the car :")

    }
}

let c1=new Car();
c1.start();
c1.stop();
let c2=new Car();
c1.setColor("blue");
c2.setColor("black");

//constructor:special method ,automatically invoke by new keyword

class Flower{
    constructor(name,color){
        this.name=name;
        this.color=color;
        console.log(this.name);
        console.log(this.color);
    }
}
let rose=new Flower("Roze","Red");
let sunFlower=new Flower("SunFlower","Yellow");

class Person{

   constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}

let p1= new Person("John", "Doe");
console.log(p1.getFullName());


//Inheritance:passing methods and properties from parent to child:

class Animal
{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    deatail(){
        console.log(this.name);
        console.log(this.color);
    }
    eat(){
        console.log("can eat !!!");

   }
   run(){
    console.log("can run :");
   }
}

class Dog extends Animal
{
    sound(){
        console.log("Bhau Bhau :");
    }

}

let dog=new Dog("Tom","Back");
dog.deatail();
dog.eat();
dog.run();
dog.sound();

//when child and parent having same method at that time child method will be invoke (overriding):


//Super keyWord:used to call the constructor of parent class to access the parent properties and method:

class Flower1{
    constructor(){
        console.log("having smell !!") ;
           
    }
    
}

class Rose extends Flower1{
    constructor(name,color){
        super(); //need to invoke parent
        this.name=name;
        this.color=color;
    }
    deatail(){
        console.log(this.name);
        console.log(this.color);
    }
    
    
}

let rose1=new Rose("Rose","pink");
rose1.deatail();

//class for user:

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewDetail(){
        console.log(this.name);
        console.log(this.email);
    }
}

let user1=new User("tayyaba","tayyaba@gmail.com");
user1.viewDetail();

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editDetails(){
        console.log("you can edit your data :");
    }
}

let admin1=new Admin("saad","sad@gmail.com");
admin1.viewDetail();
admin1.editDetails();

//Error Handling: try catch

let a=5;
console.log(a);
let b=5;
console.log(a);
let c=5+a;
console.log(a);
let d=5+c;
try{
    let f=5+e;  //having error block the running the code
}
catch (err){
    console.log(err);
}
console.log("hiii");
console.log("hiii");
console.log("hiii");
console.log("hiii");
console.log("hiii");
console.log("hiii");
console.log("hiii");
console.log("hiii");
console.log("hiii");








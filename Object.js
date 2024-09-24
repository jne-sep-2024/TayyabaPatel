//creation of the objects:
//we can create an object using three methods :


//1)Method 1:
const obj={
    name:"tayyaba",
    age:21,
    eat:()=>{console.log("Eating the Food")}
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(obj["name"]);
console.log(obj.age);
obj.eat();

//2)Method 2:
function Info(id,name,age,email,eat){
    this.id=id;
    this.name=name;
    this.age=age;
    this.email=email;
    this.eat=function(){console.log("Eating the Fooodd@@@")};
    this.run=function(){console.log("Running")}  

}

let info1=new Info(101,"Tayyaba",21,"tayyaba@gmail.com");
let info2=new Info(102,"Tayyaba",21,"tayyaba@gmail.com");
let info3=new Info(103,"Tayyaba",21,"tayyaba@gmail.com");
console.log(info1.name);
info1.age;
console.log(info1);
console.log(info2);
console.log(info3);
info1.eat();
info1.run();

//3)Object.create():create the new object from exusting object:

let obj1=Object.create(obj);
obj1.name="Sadd";
obj1.age=21;
console.log(obj1);
delete obj1.name;
console.log(obj1);

// Methods Of Object:Built-in Methods on Objects

//1)keys();
const user={
    id:101,
    name:"tayyaba",
    age:21,
    emai:"tayyba@gmail.com"
};

const user1=Object.create(user);
user1.name="Ram";
user1.id=102;
user1.age=22;
console.log(user1);
console.log(Object.keys(user1));
console.log(Object.keys(user));

//Object.values():
console.log(Object.values(user));
console.log(Object.values(user1));

//Object.entries():it returns the Array:
let entries=Object.entries(user);
console.log(entries);

//assign():
console.log(user);
console.log(user1);
Object.assign(user,user1);
console.log(user);
console.log(user1);

//Object.freeze():not change the value:
Object.freeze(user1);
user1.name="Umar";
user1.pass=12345;
user1.age=20;
console.log(user1);
console.log(user1.pass);

//seal();
Object.seal(user);
user.name="Saad2";
delete user.age;
console.log(user);


//Inheritance:

const vehicle={
    start:function(){
        console.log("You Can Start : !");
    }
}

const car=Object.create(vehicle);
car.drive=function(){console.log("you can Drive")};
car.start();
car.drive();





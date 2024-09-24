const Animal={
    eat:function(){
        console.log("can eat !!!");
    },
    run:function(){
        console.log("Can Run !!!")}
}

const dog={
    name:"Tom",
    color:"White"   
}

dog.__proto__=Animal;
dog.eat();
dog.run();
console.log(dog.name);

//Protype Creating Methods :

//Object ---->Object:
const Flower={
    smell:function(){console.log("can Smelll")},
    
}
const rose=Object.create(Flower);
rose.detail=function(){console.log("Having Color")}
console.log(rose);
rose.smell();

//By the constructor:
function info(name,age,email){
    this.name=name,
    this.age=age,
    this.email=email
}
info.prototype.greet=function(){console.log(`hiii : ${this.name}`)};
let p1=new info("Tayyaba",21,"tay@gmail.com");
console.log(p1);
p1.greet();

//By Class

class Flower1
{
    constructor(name,color){
        this.name=name;
        this.color=color;

    }
     smell() {
        console.log(`${this.name} smell very good`);
        
    };
}

let f1=new Flower1("Champa","White");
console.log(f1);
f1.smell();

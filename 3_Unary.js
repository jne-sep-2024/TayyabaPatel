//Unary Operator :having only single operand:
let x = 10;
let y = +x;

console.log(y); // 10

//value of boolean : true=1,false=0
let bool=true;
console.log(+bool);
bool=false;
console.log(+bool);

//value fpr string: empty strin(0)
let str="";
console.log(+str);
str="tayyaba";
console.log(+str); //NaN
//to convert digit into number:
str='89';
console.log(+str); //it will treated as number

//unary operator with object:

const student=
{
    name:"tayyaba",
    toString:function(){
        return '25'; //in the form of string
    }

};
console.log(+student); //it is number due to unary operator

//valueof method in js:it is inbuilt method present in object prototype
//it return the primitive datatypes(String,Number,date)

let num=new Number(123);
console.log(num.valueOf());

str=new String("tayyaba");
console.log(str.valueOf());

let date=new Date();
console.log(date.valueOf());

//toString method:Each built-in type has its own toString implementation:
 num=new Number(123);
console.log(num.toString());

str=new String("tayyaba");
console.log(str.toString());

 date=new Date();
console.log(date.toString());

//- unary:
let x1 = 10;
let y1 = -x;

console.log(y1); // -10

//preincrement:
let age = 25;
++age;
console.log(age); // 26
//post increment:
console.log(age++ + 30);//56

//predecrement:
let weight = 90;
--weight;
console.log(weight); // 89
//post decrement:
console.log(weight-- - 5); //84




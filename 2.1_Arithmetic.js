//Arithmetic operators:(+,-,*,/,%,**):

//1)Addition (+);
let num1=40;
let num2=90;
console.log(num1+num2);
console.log(40+89.89999);
console.log('40'+'20');
console.log(40+'20'); //convert 40 into string
console.log(NaN+NaN); //NaN
console.log(NaN+undefined); //NaN
console.log(Number.MAX_VALUE+Number.MAX_VALUE); //Infinity
console.log(Number.MIN_VALUE+Number.MIN_VALUE); //1e-323

//2)Subtraction (-):
console.log(num1-num2);
console.log(40-89.89999);
console.log('40'-'20'); //convert into num
console.log(40-'20'); //convert 40 into num
console.log(NaN-NaN); //NaN
console.log(NaN-undefined); //NaN
console.log(Number.MAX_VALUE-Number.MAX_VALUE); //0
console.log(Number.MIN_VALUE-Number.MIN_VALUE); //0

//3)Multiplication (*):
let result = '5' * 2;//convert 5 into num
console.log(result);

//4)Division (/):
let result1 = '20' / 2;
console.log(result1); // 10;
let result2 = '20' / 2;
console.log(result2); // 10;

//5)Modulus (%):
let result3 = '20' % 2;
console.log(result3); // 10;
let result4 = '20' % 2;
console.log(result4); // 10;

//6) Power (**):
console.log(5**2);
console.log(5.90**2);


//Arithmetic operation using Object:
//1)valueOf Method

const energy={
    valueOf(){
        return 200;
    }
}
console.log(energy+900);
console.log(energy-20);
console.log(energy*20);
console.log(energy/10);
console.log(energy%3);
console.log(energy**3);

//2)toString Method: if object not have value of method then it have toString method

const energy1={
    toString(){
        return 200;
    }
}
console.log(energy1+900);
console.log(energy1-20);
console.log(energy1*20);
console.log(energy1/10);
console.log(energy1%3);
console.log(energy1**3);



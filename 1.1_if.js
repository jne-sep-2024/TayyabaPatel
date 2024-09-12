//if:statement used to check the condition:
//if condition true print the block other wise skip it:

let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}

age = 16;
if (age >= 18) {
  console.log('You can sign up');
}

//Nasted:
age = 16;
let state = 'CA';

if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
}

//by Logical Operator:
if(age>=16 && state=='CA'){
    console.log("you can drive");
}

///else if : check condition if condition false execute else block:

if(age>=18)
{
    console.log("you can drive");
}
else{
    console.log("you can not dive !!");
}

//else if ladder :used to check the multiple conditions:

let marks=90;

if(marks>=90 && marks<=100){
    console.log(`outstanding your marks are : ${marks} grade : A+ ` );
}
else if(marks>=80 && marks<90){
    console.log(`outstanding your marks are : ${marks} grade : A ` );
}
else if(marks>=80 && marks<=100){
    console.log(`outstanding your marks are : ${marks} grade : B+ ` );
}
else if(marks>=70 && marks<80){
    console.log(`outstanding your marks are : ${marks} grade : B ` );
}
else if(marks>=60 && marks<70){
    console.log(`outstanding your marks are : ${marks} grade : C ` );
}
else if(marks>=50 && marks<60){
    console.log(`outstanding your marks are : ${marks} grade : C+ ` );
}
else{
    console.log(`oops you failed the exam try again `);
}


 
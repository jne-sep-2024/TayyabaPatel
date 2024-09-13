//Loops:used to do repeated task :
//4 types of loops:
//1)for loop 2)while loop 3)Do while loop 4)for each loop

//1)for Loop:

for(let i=1;i<=10;i++)
{
    console.log(i);
}

let num=5;
for(let i=1;i<=10;i++)
    {
        console.log(`${num} X ${i} = ${i*num}`);
    }

//Nasted Loops:

for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=5;j++){
            process.stdout.write("*"); 
        }
        console.log();
        
    }
for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=i;j++)
            {
                process.stdout.write("*"); 
            }
        console.log();
            
    }

for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=i;j++)
           {
                process.stdout.write(`${i}`); 
            }
            console.log();
     }
for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=i;j++)
            {
                process.stdout.write(`${j}`); 
            }
                console.log();
                    
    }
for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=5;j++)
            {
                process.stdout.write(" "); 
            }
        for(let j=1;j<=i;j++)
           {
                    process.stdout.write("*"); 
           }
            console.log();
                        
    } 
    

//2)While loop:condition is imp:
let num1=1;
while(num1<=10)
{
    console.log(num1);
    num1++;

}

//odd numbers:
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}

//even numbers:
count=2;
while(count<=100)
{
    console.log(count);
    count+=2;
}

//Do While Loop:do work and the check the condition:

do{
    console.log(count);
    count++;
}while(count<=10);


do{
    console.log(count);
    count+=3;
}while(count<100);


//For Each Loop:
let list=[1,2,3,3,4,6,8,90,0];
list.forEach(function(e){
    console.log(e);

});

//with index:
list.forEach(function(e,i){
    console.log(`index of element ${e} is :${i}`)
})


//break keyword:break key word is used to terminate the loop:

let number=8;

for(let i=2;i<=number/2;i++){
    if(number%i==0){
        console.log("not prime number :");
        break;
    }
    else
    {
        console.log("its prime number :");
        break;
    }
}

let i = 0;

while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        break;
      }
      console.log(i, j);
    }
  }

  
  //continue keyword:continue keyword is used to skip the itration:

  for(let i=1;i<=10;i++){
    if(i==3)
        continue;
    console.log(i);
  }

  //odd number
  let num2 = 0;
while (num2 < 10) {
  num2++;
  if (num2 % 2 === 0) {
    continue;
  }
  console.log(num2);
}
//here outer is label given to outer  loop:
outer: for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (i + j == 3) continue outer;
      console.log(i, j);
    }
  }

//Comma Operator(,):used to saparate the expresion and values evaluate it left to right:
let result = (10, 10 + 20);
console.log(result); //30

let x = 10;
let y = (x++, x + 1);

console.log(x, y); //11 12

x = 10;
x++;
y = x + 1;

console.log(x, y);

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = '';
for (let i = 0, j = 1; i < board.length; i++, j++) {
  s += board[i] + ' ';
  if (j % 3 == 0) {
    console.log(s);
    s = '';
  }
}

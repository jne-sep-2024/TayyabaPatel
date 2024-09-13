//Comparison:used to compare the two or more values:
//(==,<,>,<=,>=,!=,===)

console.log(10>11); //false
console.log('apple'<'banana'); //true
console.log('a'>'B'); //true
console.log('apple'.toUpperCase()>'Banana'); //false
console.log('Apple'.toLowerCase()>'banana'.toUpperCase())//true
console.log( 20 > 10);// true
console.log( 20 < 10);// false
console.log( 10 == 1); // true

//comparing numbers:
let a = 10, 
    b = 20; 
console.log(a >= b);  // false
console.log(a == 10); // true

//comparing string:
let name1 = 'alice',
    name2 = 'bob';    
let result = name1 < name2;
console.log(result); // true
console.log(name1 == 'alice'); // true

//double equal to(==):
console.log(10 == '10'); // true (compaire before type coesion)

//triple or strict equalto:
console.log(10==='10'); //false (compaire after type coesion)

//comparison by using toString and valueOf method:
let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple > 10); // false
  console.log(orange == 20); // true

  //comparing all boolean values:
  console.log(true > 0); // true (true=1)
console.log(false < 1); // true (false=0)
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

//Compare null and undefined:
console.log(null==undefined); //true
console.log(null===undefined); //false

//Compare NaN with other values
console.log(NaN==1); //false
console.log(NaN==0); //false
console.log(NaN=='1'); //false
console.log(NaN==null); //false
console.log(NaN==undefined); //false
console.log(NaN==NaN); //false
console.log(NaN===NaN); //false
console.log(NaN!=NaN); //true
console.log(NaN!=1); //true
console.log(NaN!==1); //true
console.log(NaN!==NaN); //true

//

  



//Object:collection of key-value pairs. Each key-value pair is called a property.

//creating empty object:
const obj={};

//object with value :
const Person={
    firstName:"Tayyaba",
    lastName:"Patel"
};
//Accessing values of object:
  //1). dot notation method:
  console.log(Person.firstName);
  console.log(Person.lastName);
  //2)[] array notation method:
  console.log(Person['firstName']);
  console.log(Person['lastName']);

//Modifying the values from object:
Person.firstName="Saad";
console.log(Person);
Person["lastName"]="Shaikh";

//Adding new Properties (.):
Person.age=20;
console.log(Person);

//deleting Property(delete):
delete Person.age;
console.log(Person);

//proprty exist or not:
console.log('firstNam' in Person);
console.log('firstName' in Person);
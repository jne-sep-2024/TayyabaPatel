//**Sysnchronous:Synchronous means the code run sequentially.
//each instruction wait to complete previous instruction:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);

//**Asynchronous:if some instruction take time to print so next instruction do not wait:

function hello(){
    console.log("hello");
}
setTimeout(hello,2000); //run after 2 second
console.log("tayyaba"); //not wait run directly
console.log("patel"); //not wait directly run

setTimeout(()=>{
    for(let i=1;i<=10;i++){
        console.log(i);
    }
},3000);
console.log("good"); //run not wait


///CALL BACKS:passing argument function to another function:
function sum(a,b){
    return a+b;
}
function calculator(a,b,sum)
{
    return sum(a,b);
}



//CALL BACK HELL:nasted call back make pyramid of doom:
//difficult to understand and difficult to read:

function getData(dataId){
    setTimeout(()=> console.log("Data:",dataId),2000);
}
getData(34);

//we need data1 first then data2 then and so on
getData(1); //come at same time:
getData(2);
getData(3);
getData(4);

function getData1 (data,getNextData){
    setTimeout(()=>{
        console.log("data :",data);
        if(getNextData){
            getNextData();
        }
    },2000)
}
//call back hell :not understandable 
getData1(1,()=>{
    getData1(2,()=>
        {getData1(3,()=>
            {getData1(4,()=>
                {getData1(5,()=>
                    {getData1(6)}
                )
            }
        )
    }
)
});
});

//To Avoid Call Back hell We use Promises :
//Promises:Promises is an object is js ,eventual completion of task
//Promises can resolve And reject
//Resolev and reject are also call backs
//Promise have three state=pending,fullfilled,reject

// let promise=new Promise((resolve,reject)=>{
//     //console.log("I am a Promise !!!");
//    // resolve("full fill");
//    //reject("error");

// });

function getData2(data,getData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data :",data);
            resolve("suceccsss");
            if(getData){
                getData();
            }

        },4000)
    })
}
let res=getData2(12345);
console.log(res);


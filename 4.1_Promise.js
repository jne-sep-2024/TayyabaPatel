function getPromise(){
    return new Promise((res,rej)=>{
        console.log("this is promise !!");
        //res("Promise Resolve :");
        rej("Promise Reject:");
    });

    
};

let promise=getPromise();  //data is statement which pass during resolve
promise.then((data)=>{
    console.log("resolve the promise: good ",data);
}).catch((err)=>{
    console.log("err found",err);  //err is msg we pass during reject
})

//Promise haining:
function getData1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("some Data");
            res("success");

        },3000);
    })
}
function getData2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("some Data");
            res("success");

        },3000);
    })
}
console.log("Fetching data1.....");
getData1().then((data)=>{
    console.log(data);
    console.log("Fetching data2.....");
    getData2().then((data)=>{
        console.log(data);

    })
})

function data1(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(dataId);
            res("data1",dataId);

        },3000);
    })
}
function data2(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(dataId);
            res("data2",dataId);

        },3000);
    })
}

function data3(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(dataId);
            res("data3",dataId);

        },3000);
    })
}

function data4(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(dataId);
            res("data4");

        },3000);
    })
}
console.log("Fetching data 1:");
data1(1).then((data)=>{
    console.log(data);
    console.log("Fetching data 2:");
    data2(2).then((data)=>{
        console.log(data);
        console.log("Fetching data 3:");
        data3(3).then((data)=>{
            console.log(data);
            console.log("Fetching data 4:");
            data4(4).then((data)=>{
                console.log(data);
            
            })
        
        })
    
    })

})

//to Solve the Chaining Promises We have Async Await:
//Async Await are keywords in js 
//async is used with function(return promise)

async function hello(){
    console.log("hello");
}
hello();
//await pause the execusion surrounding async function:

function api(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("weather details..");
            res("success");
        },3000)
    })
}

async function getWeather(){
    await api();
    await api();
    await api();
    await api();
}
getWeather(); 

function fetchingInfo(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`your id is ${id}`);
            res();

        },4000)
    })
}

async function gettingInfo() {
    await fetchingInfo(1);
    await fetchingInfo(3);
    await fetchingInfo(4);
    await fetchingInfo(5);
    await fetchingInfo(6);
    await fetchingInfo(7);
    await fetchingInfo(8);
    await fetchingInfo(9);
    await fetchingInfo(10);

}
gettingInfo();


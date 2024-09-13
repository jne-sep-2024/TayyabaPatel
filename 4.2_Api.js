//Fetching Api:(Application programming interface)
//having fetch method to fetch the data from api:
//in fetch it return a promise : return the first promise
//Fetch Used Get Req bydefault

let URL="https://cat-fact.herokuapp.com/facts";
// let promise=fetch(URL);
// console.log(promise);

let paraData=document.getElementById("#para");
let btn1=document.getElementById("#btn");
 async function getFacts(){
    console.log("Gatting Data :");
    let promise= await fetch(URL);
    let data=await promise.json();
     console.log(promise);
     console.log(data);
     console.log(promise.status);
     console.log(promise.ok);
    // paraData.innerHTML=data[0].text;
    
    
}


getFacts();

//AJAX :(Asynchronous js and xml),data formate which comes from server
//JASON:(js object notation) method return the second promise
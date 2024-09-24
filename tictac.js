
//function for the turn
let gameover=false;
let turn="X";
function turnChange(){
    return turn==="X"?"0":"X";
}

//function for the win
function win(){
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach((e)=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) && boxtext[e[0]].innerText!="" ){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" " +"WON THE MATCH";
            gameover=true;

        }
       else if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) && boxtext[e[0]].innerText!="" ){
            document.querySelector('.info').innerText=boxtext[e[1]].innerText+" " +"WON THE MATCH";
            gameover=true;

        }
       

    })
}

// main Method

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxText=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            turn=turnChange(); 
            win();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="Turn For"+" "+ turn;
            }
        }
    })
})

//reset:
let reset=document.getElementsByClassName("reset")[0];
reset.addEventListener('click',()=>{
    let boxText=document.querySelectorAll(".boxtext");
    Array.from(boxText).forEach(element=>{
        element.innerText=""

    }
    )
    
})
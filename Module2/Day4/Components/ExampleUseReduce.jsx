import { useReducer, useState } from "react"

export default function ExampleUseReduce(){
    const[state,dispatch]=useReducer(reduce,{balance:0})
    const [amount,setAmount]=useState(0);
    function reduce(state,action){
        if(action.type==="add"){
            return {...state,balance:state.balance+action.payload}
        }
        if(action.type==="sub"){
            return {...state,balance:state.balance-action.payload}
        }

    }
    return(
        <>
        <div>Count : {state.balance}</div>
        <input type="text"
        onChange={(e)=>setAmount(e.target.value)}    
        />
        <button onClick={()=>dispatch({type:"add",payload:Number(amount)})}>Deposit</button>
        <button onClick={()=>dispatch({type:"sub",payload:Number(amount)})}>WithDraw</button>

     
        </>
    )
}
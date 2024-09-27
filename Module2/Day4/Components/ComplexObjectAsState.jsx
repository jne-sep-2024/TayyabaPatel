import { act } from "react";
import { useReducer } from "react";

export default function ComplexObjectAsState(){
    const [state,dispatch]=useReducer(reducer,{count:0,increaseBy:1});
    function reducer(state,action){
        if(action.type==="increment"){
            return {...state,count:state.count+action.payload};

        }
        if(action.type==="decrement"){
            return {...state,count:state.count-action.payload};

        }
        if(action.type==="incrementBy"){
            return {...state,increaseBy:action.payload}

        }

    }
    return (
        <>
        <h1>Count is :{state.count}</h1>
        <input type="text" 
          value={state.increaseBy} 
          onChange={(e)=>dispatch({type:"incrementBy",payload:Number(e.target.value)})}
        />
        <button
        onClick={()=>dispatch({type:"increment",payload:(state.increaseBy)})}
        >Increase</button>
         <button
        onClick={()=>dispatch({type:"decrement",payload:(state.increaseBy)})}
        >Decrease</button>
        </>
    )
    



}
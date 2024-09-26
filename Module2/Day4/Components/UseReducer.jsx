import { useReducer } from "react";

export default function UseReducer(){
   const [state,dispatch]=useReducer(reducer,0);
   function reducer(state,action){
    if(action.type=="increment"){
        return state+action.payload;
    }
    else{
        return state-action.payload;
    }

   }
   return (
    <>
    <h1>Reducer Hook : {state}</h1>
    <button onClick={()=>dispatch({type:"increment",payload:3})}>For Increment</button>
    <button onClick={()=>dispatch({type:"decrement",payload:2})}>For Decrement</button>
    </>
   )

}
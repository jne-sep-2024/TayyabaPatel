import { useReducer } from "react";

export default function ObjectAsState(){
    const [state,dispatch]=useReducer(reducer,{count:0});
    function reducer(state,action){
        if(action.type=="increment"){
            return {...state,count:state.count+action.payload};
        }
        else{
            return {...state,count:state.count-action.payload};
        }

    }

    return (
        <>
        <h1>useReducer By Boject :{state.count} </h1>
        <button onClick={()=>dispatch({type:"increment",payload:3})}>Increment:</button>
        <button onClick={()=>dispatch({type:"decrement",payload:6})}>deacrement</button>
        </>
    )

}
import React, { act, useReducer } from 'react'

export default function HookReducer() {
    const[state,dispatch]=useReducer(reducer,{count:0})
    function reducer(state,action){
        switch(action.type){
            case 'increment':
                return {count:state.count+action.payload};
                break;
            case 'decrement':
                return {count:state.count-action.payload};
                break;
            case 'reset':
                return {count:0};
                break;
        }
    }
  return (
    <div>
         <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' ,payload:2})}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement',payload:2 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button> 
    </div>
  )
}

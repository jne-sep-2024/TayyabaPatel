import { useState } from "react";

export default function State(){
    const[count,setCount]=useState(0);
    function increament(){
        setCount(count+1);
    }
    function decreamen(){
        setCount(count-1);
    }
    return(
        <>
        <h1>Count value is : {count}</h1>
        <button onClick={increament}>Increame the value</button>
        <button onClick={decreamen}>Decreament the value</button>
        </>
    )
}
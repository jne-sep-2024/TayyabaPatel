import { useState } from "react";

export default function MultipleState(){
    const[count,setCount]=useState(0);
    const[countBy,setCountBy]=useState(1);

    function increment(){
        setCount(count+countBy);
    }
    function decrement(){
        setCount(count-countBy);
    }
    function incrementBy(){
        setCountBy(countBy+1);
    }
    function decrementBy(){
        setCountBy(countBy-1);
    }

    return (
        <>
        <h1>Increase the Count : {count}</h1>
        <button onClick={increment}>Increment Value</button>
        <button onClick={decrement}>Decrement Value</button>

        <h1>Increase the CountBy : {countBy}</h1>
        <button onClick={incrementBy}>Increment ValueBy</button>
        <button onClick={decrementBy}>Decrement ValueBy</button>
        </>

    )

}
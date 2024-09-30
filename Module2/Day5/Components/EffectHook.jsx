import { useEffect, useState } from "react";

export default function EffectHook(){
    const[data,setData]=useState(null);
    const [count,setCount]=useState(0);
    const [text,setText]=useState("");
    useEffect(()=>{
        console.log("component mounted !")
        fetch('https://catfact.ninja/fact').
        then(response=>response.json()).
        then(data=>setData(data));
    },[]) //only one time renders
    useEffect(() => {
        console.log('Effect runs after every render');
    });
    useEffect(()=>{
        console.log("run when Change in input field !!");
    },[text])

    return(
        <div>
            <h1>Fetching the Data :</h1>
            <ul>
                {
                    data ?<li>{data.fact}</li>:<li>data not fetching..</li>
                
                }
            </ul>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <h1>Count is :{count}</h1>
            <button onClick={()=>setCount(count+1)}>increase</button>
        </div>
    )
}
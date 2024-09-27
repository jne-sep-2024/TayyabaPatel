import { useState } from "react";

export default function Event(){
    const[text,setText]=useState("");
    const shoot=(a,b)=>alert(b.type);
    const submit=()=> alert(`${text} is submited :`);
    
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h1>hello {text}</h1>
            <button onClick={submit}>Submit</button>
            <button onClick={(event)=>shoot("tayyaba",event)}>Click Me</button>

        </div>
    )
}
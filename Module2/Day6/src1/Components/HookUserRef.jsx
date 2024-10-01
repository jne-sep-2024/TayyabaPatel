import React, { useEffect, useRef, useState } from 'react'

export default function HookUserRef() {
    const[name,setName]=useState("");
    // const[count,setCount]=useState(0);
    const count=useRef(0);
    useEffect(()=>{
        // setCount(pre=>pre+1);
        count.current=count.current+1;
    })
    const btn=useRef();
    console.log(btn.current)
   
  return (
    <div>
        <input type="text" name="name" id="name"
        onChange={(e)=>setName(e.target.value)} />
        <h1>name : {name}</h1>
        {/* <h2>count : {count}</h2> */}
        <h2>Count : {count.current}</h2>
        <button className="btn" ref={btn}>Click Here</button>
    </div>
  )
}


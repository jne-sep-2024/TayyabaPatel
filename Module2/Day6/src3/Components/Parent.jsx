import React, { useState } from 'react'
import Child from"./Child";

export default function Parent() {
    const [parentcount,setParentCount]=useState(0);
    const [childcount,setChildCount]=useState(0);
  return (
    <div>
        <h1>This Is Parent Componet :</h1>
        <h1>Count of Parent : {parentcount}</h1>
        <Child count={childcount} />
        <button onClick={()=>setParentCount(parentcount+1)}>ParentCount</button>
        <button onClick={()=>setChildCount(childcount+1)}>ChildCount</button>
      
    </div>
  )
}

import React, { useState } from 'react'

export default function HookState() {
    const[todos,setTodos]=useState(["learnReact","learn useState"])
    function addTodo(){
        setTodos([...todos,"New Task"]);
    }
  return (
    <div>
        <h1>To dos</h1>
        <ul>
            {
                todos.map((todo,index)=>
                    <li key={index}>{todo}</li>
                
            )}
        </ul>
        <button onClick={addTodo}>Add Task</button>
        
      
    </div>
  )
}


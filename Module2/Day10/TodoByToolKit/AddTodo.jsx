import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Corrected import
import { addTodo } from "../Features/Todos/TodoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    // Added 'const' to define the function
    e.preventDefault();
    dispatch(addTodo(input)); // Dispatch the action
    setInput(""); // Clear input after submission
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter todos"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Handle input change
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

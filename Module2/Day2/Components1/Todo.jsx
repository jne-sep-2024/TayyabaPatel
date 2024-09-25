import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  // State Variables:
  const [todos, setTodos] = useState([]);
  const completedTodo=todos.filter((todo)=>todo.done).length;
  const totalTodos=todos.length;
  return (
    <> 
    <Form todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos} />   
    <Footer completedTodo={completedTodo} totalTodos={totalTodos}/>  
    </>
  );
}

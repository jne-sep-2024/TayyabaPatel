import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todos/TodoSlice";
import "./Todo.css";

export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>
        Todos
        {todos.map((todo) => (
          <ul>
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
            ;
          </ul>
        ))}
      </div>
    </>
  );
}

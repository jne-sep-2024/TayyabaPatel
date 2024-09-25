
import styles from './form.module.css';
import { useState } from "react";
export default function Form({todos,setTodos}){
    // const [todo, setTodo] = useState(""); 
    const [todo, setTodo] = useState({name:"",done:false}); 
    function handleSubmit(e) {
        e.preventDefault(); // Prevent the form from refreshing the page
        setTodos([...todos, todo]); // Update the todos state with the new todo
        setTodo({name:"",done:false}); 
      }
    return (
        <>
         <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.div}>
        <input
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          className={styles.forminput}
          placeholder='Enter Todo Iems...'
        />
        <button type="submit" className={styles.btn}>Add</button>
        </div>
      </form>
        </>
    )
}
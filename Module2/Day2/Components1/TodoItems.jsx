import styles from "./todoitems.module.css"
export default function TodoItems({item,todos,setTodos}){
    function handleDelete(item){ 
        setTodos(todos.filter((todo)=>todo !== item));
    }
    function handleClick(name){
       const newArra=todos.map((todo)=>todo.name===name ? {...todo,done:!todo.done} : todo);
       setTodos(newArra);
       

    }
    const className=item.done ? styles.completed :"";
    return (
        <div className={styles.item}> 
    <div className={styles.itemName}>
       <span onClick={()=>handleClick(item.name)} className={className} > {item.name} </span>
    <span>
         <button className={styles.deletebtn} onClick={()=>handleDelete(item)}>x</button>
    </span>
    </div>
    <br />
    <hr className={styles.line}/>
    </div>
    )
}
import styles from "./footer.module.css";

export default function Footer({completedTodo,totalTodos}){
    return(
        <div className={styles.footerMain}>
            <span className={styles.footer}>Completed Todos : {completedTodo}</span>
            <span className={styles.footer}>Total Todos : {totalTodos}</span>
        </div>
    )
}
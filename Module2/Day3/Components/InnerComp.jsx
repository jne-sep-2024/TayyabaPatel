import styles from './innercomp.module.css';

export default function InnerComp({children}){
    return <div className={styles.innerComp}>{children}</div>
}
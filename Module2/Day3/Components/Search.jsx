import { useEffect, useState } from "react"
import styles from './search.module.css'
const URL='https://api.spoonacular.com/recipes/complexSearch';
const API_KEY="663dc9358f7940468df6c8af383e03d3";

export default function Search({setFoodData,foodData}){
    const [query,setQuery]=useState("pizza");
    
     useEffect(()=>{
        async function fetchFood(){
          const res=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
          const data=await res.json();
         setFoodData(data.results);
         console.log("data",data.results);
        }
        fetchFood();
    },[query])

    return (
        <>
        <div className={styles.searchContainer}>
            <input type="text"
             value={query}
             onChange={(e)=>setQuery(e.target.value)}
             className={styles.inputSearch}
             />
        </div>

        </>
    )
}
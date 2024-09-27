import { useEffect, useState } from 'react';
import styles from './fooddetail.module.css'
export default function FoodDetail({foodId }){
    const [food,setFood]=useState({});
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY="663dc9358f7940468df6c8af383e03d3";
    useEffect(()=>{
       async function fetchFood(){
         const res=await fetch(`${URL}?apiKey=${API_KEY}`)
         const data=res.json();
         console.log(data);
         setFood(data);
        }
        fetchFood();

    },[foodId])

    return (
        <div>
           <div>
            <h1>{foodId}</h1>
            <img src="" alt="" />
           </div>
           <span>
            <strong>{foodId.readyInMinutes}</strong>
           </span>
               

        </div>
    )
}
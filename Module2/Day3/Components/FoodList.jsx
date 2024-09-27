import FoodItem from "./FoodItem";

export default function FoodList({foodData,setFoodId}){
    console.log(foodData);
    
    return(
        <>
        {
          foodData?.map((food)=>
          <FoodItem setFoodId={setFoodId} food={food} key={food.id } />)
        
         }
        </>
    )
}

import './App.css'
import { useState } from 'react'
import Search from './Components/Search'
import FoodList from './Components/FoodList'
import Nav from './Components/Nav'
import Container from './Components/Container';
import InnerComp from './Components/InnerComp'
import FoodDetail from './Components/FoodDetail'
function App() {
  const [foodData,setFoodData]=useState([])
  const [foodId,setFoodId]=useState("658615");
  return (
    <>
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container >
      <InnerComp> 
        <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerComp>
        <InnerComp><FoodDetail  foodId={foodId}></FoodDetail></InnerComp>
    </Container>
  
    </>
  )
}

export default App

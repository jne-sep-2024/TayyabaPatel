// import { useState } from 'react'
// import UseState from './Components/UseState'
// import UseReducer from './Components/UseReducer'
// import ObjectAsState from './Components/ObjectAsState'
// import ComplexObjectAsState from './Components/ComplexObjectAsState'
// import ExampleUseReduce from './Components/ExampleUseReduce'
// import NotFound from "./Router/NotFound"
// import DashBoard from "./Router/DashBoard"
// import Home from "./Router/Home"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Setting from "./Router/Setting"
// import Profile from "./Router/Profile"
// import Product from "./Router/Product"
import { createContext, useState } from "react"
import CheckOut from "./CheckOut"
import Login from "./Login";
import LogOut from "./LogOut";
export const userContext=createContext();

function App() {
  const [user,setUser]=useState("guest");
  return (
    <>
    {/* <BrowserRouter> */}
    {/* <h1>UseState hook :</h1>
    <UseState/>
    <hr />
    <h1>useReducer Hook :</h1>
    <UseReducer/>
    <hr />
    <h1>useReducer Hook passing Object  :</h1>
    <ObjectAsState/>
    <hr />
    <h1>useReducer Hook passing Complex Object  :</h1>
    <ComplexObjectAsState/>
    <hr />
    <h1>Example :</h1>
    <ExampleUseReduce/> */}
    {/* <h1>this is app Page</h1>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/dashboard" element={<DashBoard/>}>
      <Route path="setting" element={<Setting/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/product/:id" element={<Product/>}></Route>
    </Routes> */}
    

    {/* </BrowserRouter> */}
    {/* <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/> */}
    <userContext.Provider value={{user,setUser}}> 
       <Login/>
      <CheckOut />
      <LogOut/>
     
    </userContext.Provider>
   
    </>
  )
}

export default App

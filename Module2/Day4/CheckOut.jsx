import { useContext } from "react";
import { userContext } from "./App";
export default function CheckOut(){ 
    const {user}=useContext(userContext) ;  
    return (
        <>
           <h1>Check Out {user}</h1>
        </>
    )
}
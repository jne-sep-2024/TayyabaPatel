import { useContext } from "react"
import { userContext } from "./App"


export default function LogOut(){
    const {setUser}=useContext(userContext);
    return (
       
        <div>
            <button onClick={()=>setUser("guest")}>LogOut</button>

        </div>
    )
}
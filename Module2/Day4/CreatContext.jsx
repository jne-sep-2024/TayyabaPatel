import { createContext } from "react";
import { createContext, useState } from "react"

export const UserContext=createContext();

export default function ProvideContext({children}){
    const [user,setUser]=useState("guest");
    return(
        <div>
             <UserContext.Provider value={{user,setUser}}>
                {children}
             </UserContext.Provider> 
                
        </div>
    )

}

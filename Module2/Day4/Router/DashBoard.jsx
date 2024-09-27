import { Outlet,Link } from "react-router-dom"
export default function DashBoard(){
    return(
        
        <>
        <ul>
            <li><Link to="setting">setting</Link></li>
            <li><Link to="profile">profile</Link></li>
        </ul>
        <h1>This is DashBoard</h1>
        <Outlet/>
        </>
    )

}
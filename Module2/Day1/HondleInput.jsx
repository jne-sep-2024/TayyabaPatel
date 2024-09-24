import { useState } from "react";

export default function HandleInput(){
    const[name,setName]=useState("");
    const[info,setInfo]=useState({firstName:"",lastName:"",age:0});
    function handleChange(e){
        setName(e.target.value);

    }
    function handleSubmit(e){
        e.preventDefault();  //not referesh
        console.log(info);


    }
    return(
        <>
        {info.firstName} - {info.lastName} : {info.age}
        <form >
            <input type="text" onChange={(e)=>handleChange(e)} value={name} />
            <br />
            <br />
            <input type="text" onChange={(e)=>setInfo({...info,firstName:e.target.value,lastName:"",age:0})} value={info.firstName}  />
            
            <input type="text" onChange={(e)=>setInfo({...info,firstName:"",lastName:e.target.value,age:0})} value={info.lastName}/>
            
            <input type="number" onChange={(e)=>onChange({...info,firstName:"",lastName:"",age:e.target.value})} value={info.age} />
            <br />
            <button onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
        </>
    )
}
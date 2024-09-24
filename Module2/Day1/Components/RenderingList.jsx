export default function RenderingList(){
    let fruits=["Apple","Mango","Banana","PineApple"];
    let number=[1,2,3,4,5,6,7,8,9,20];
    return(
    <>
    <h1>Fruits List</h1>
    <ul>{
        fruits.map(fruit=>(
            <li key={fruit}>{fruit}</li>
    
        ))
     }
    </ul>
    <ul>
       {
        number.map(num=>
            <li key={num}>{num%2}</li>
        )
       } 
    </ul>
     
    </>
    )
}
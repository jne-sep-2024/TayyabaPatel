export default function RenderingObject(){
    const fruits=[
        {name :"Grapes ",price:10,emoji :"&#127815;"},
        {name :"Apple ",price:15,emoji :"&#127815;"},
        {name :"Banana ",price:4,emoji :"U+1F625"},
        {name :"PineApple ",price:12,emoji :"&#127815;"},
        {name :"Orange ",price:7,emoji : 127817},

    ]
    return <>
     <ul>{
        fruits.map(fruit=>(
            <li key={fruit.name}>{fruit.name} {fruit.emoji} {fruit.price}</li>
    
        ))
     }
    </ul>
    
    </>
}
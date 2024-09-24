export default function EventHandle(){
    function msg(){
        console.log("Hello from Click Event")
    }
    return (
        <>
        <button onClick={msg}>Click Me</button>     
        </>
    )
}
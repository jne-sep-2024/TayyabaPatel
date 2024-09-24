function PropsAsArray({number}){
   return <>
    {/* <h1>{props.number[0]}</h1>
    <h1>{props.number[2]}</h1>
    <h1>{props.number[3]}</h1>
    <h1>{props.number[4]}</h1> */}
    {/* <h1>{props.number}</h1> */}
    <h1>{number}</h1>
    <h1>{number[0]}</h1>
    <h1>{number[1]}</h1>
    </>
}
export default PropsAsArray;
import Hello from "./Components/Hello"
import Jsx from "./Components/Jsx"
import ReUsability from "./Components/ReUsability"
import Props from "./Components/Props"
import DestrucProps from "./Components/DestrucProps"
import PropsAsArray from "./Components/PropsAsArray"
import PropsObject from "./Components/PropsObject"
import RenderingList from "./Components/RenderingList"
import RenderingObject from "./Components/RenderingObject"
import Fruits from "./Components/Fruits"
import ConditionalComp from "./Components/ConditionaComp"
import ElementVar from "./Components/ElementVar"
import EventHandle from "./Components/EventHandle"
import State from "./Components/State"

function App() {
  let number=[1,2,2,3,4,5,6];
  let info={
    name:"Tayyaba",
    age:22,
    email:"tayyaba@gmail.com",
    gender:"Female"

  }
  return (

    <>
    <h1>/* Basics Of React */</h1> 
    <h1>hello world</h1>
    <Hello/>
    <Jsx/>
    <hr />
    {/* Can Reusable */}
    <h1>ReUsability Of Components</h1>
    <ReUsability/>
    <Hello/>
    <Jsx/>
    <ReUsability/>
    <hr />

    {/* Props in react */}
    <h1>/* Props in react */</h1>
    <Props name="Tayyaba" age="21 " msg="Hello Dear"/>
    <Props name="Saad" age="18 " msg="Hello Dear"/>
    <Props name="Umar" age="5 " msg="Hello Dear"/>
    <Props name="lakshna" age="22" msg="Hello Dear"/>
    <hr />

    {/* Destructuring the Props : */}
    <h1>/* Destructuring the Props : */</h1>
    <DestrucProps name="Tayyaba " emoji="&#128515;" msg="Hello"></DestrucProps>
    <DestrucProps name="Saad " emoji="&#128516;" msg="Hello"></DestrucProps>
    <DestrucProps name="Tom" emoji="&#128514;" msg="Hello"></DestrucProps>
    <hr />
    <h1>/*Props An Array :*/</h1>
    <PropsAsArray number={number}></PropsAsArray>
    <hr />
    <h1>/*Props an Object :*/</h1>
    <PropsObject info={info}></PropsObject>
    <hr />
    <h1>/* rendering List */</h1>
    <RenderingList></RenderingList>
    <hr />
    <h1>/* rendering Object*/</h1>
    <RenderingObject></RenderingObject>
    <hr />
    <h1>/* rendering Components inside the Loop*/</h1>
    <Fruits></Fruits>
    <hr />
    <h1>/* Conditional Component*/</h1>
    <ConditionalComp></ConditionalComp>

    <hr />
    <h1>/*Element Variables*/</h1>
    <ElementVar></ElementVar>
    <hr />
    <h1>/* Event Handling */</h1>
    <EventHandle></EventHandle>
    <hr />
    <h1>/* State In react */</h1>
    <State></State>

     </>
     
  )
}
export default App

import ClassComp from "./Components/ClassComp"
import FunctionalComp from "./Components/FunctionalComp"
import State from "./Components/State"
import Counter from "./Components/Counter"
import Event from "./Components/Event"
import FragmentDemo from "./Components/FragmentDemo"
import EffectHook from "./Components/EffectHook"
import HookState from "./Components/HookState"
import HookReducer from "./Components/HookReducer"
import { PureComponent } from "react"
import PureComp from "./Components/PureComp"

function App() {

  return (
    <>
    <h1>This Is From Class Component:</h1>
    <ClassComp name="tayyaba" age="22" email="tayyba@gmail.com"/>
    <hr />
    <h1>This Is From Functional Component :</h1>
    <FunctionalComp name="tayyaba" age="22" email="tayyba@gmail.com"/>
    <hr />
    <h1>State In React : </h1>
    <State/>
    <hr />
    <h1>State And setState Method in React:</h1>
    <Counter/>
    <hr />
    <h1>Events:</h1>
    <Event/>
    <hr />
    <h1>Fragment:</h1>
    <FragmentDemo/>
    <hr />
    <h1>useEffectHook:</h1>
    <EffectHook/>
    <hr />
    <h1>useStateHook:</h1>
    <HookState/>
    <hr />
    <h1>useReducerHook:</h1>
    <HookReducer/>
    <hr />
    <h1>PureComponet:</h1>
    <PureComp/>

    
   
  
    </>
  )
}

export default App

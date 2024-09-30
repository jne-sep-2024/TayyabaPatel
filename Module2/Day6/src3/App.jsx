import { useState } from 'react'
import Parent from './Components/Parent'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'


function App() {
  return (
    <>
    <Parent/>
    <hr />
    <h1>Highr order components :</h1>
    <ClickCounter/>
    <HoverCounter name="tayyaba"/>
    
    </>
  )
}

export default App

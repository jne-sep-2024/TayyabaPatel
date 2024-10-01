import React from 'react'

function Child({count}) {
  return (
    <div>
        {console.log("child compnent rerender",{count})};
        <h1>This is from Child Component :</h1>
        <h1>Child Count {count}</h1>
       
      
    </div>
  )
}
export default React.memo(Child); 

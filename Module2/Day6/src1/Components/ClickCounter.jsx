import React, { Component } from 'react'
import NewComp from './withCounter';

 class ClickCounter extends Component {
  render() {
    const {count,increment,name}=this.props;
    return (
      <div>
        <button onClick={increment}>Click Me : {count} {name}</button> 
      </div>
    )
  }
}
 export default NewComp(ClickCounter);

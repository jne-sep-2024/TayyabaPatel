import React, { Component } from 'react'
import NewComp from './withCounter';

 class HoverCounter extends Component {
  render() {
    const{count,increment}=this.props;

    return (
      <div>
        <button onMouseOver={increment}>Inrement By {count}</button>
      </div>
    )
  }
}
export default NewComp(HoverCounter);

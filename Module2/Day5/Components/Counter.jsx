import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    Counting(){
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>this.Counting()}>Increse The value</button>

        
      </div>
    )
  }
}

export default Counter

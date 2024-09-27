import React,{ Component } from "react";

export default class State extends Component{
    constructor(){
        super();
        this.state={
            msg:"welcome to my world !!!"
        };
    }
      changeMsg(){
        this.setState(
            {msg:"subscribe the channel"}
        )
      }
    render(){
       return (
         <div>
            <h2>State using Class Comp : {this.state.msg}</h2>
            <button onClick={()=>this.changeMsg()}>Subscribe</button>
        </div>
       )
    }
    
}
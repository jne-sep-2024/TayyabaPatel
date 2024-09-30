import { Component } from "react";

export default class ClassComp extends Component{
    render(){
        return(
            <div>
                <h2>hell Dear : {this.props.name}</h2>
                <h2>your age is : {this.props.name}</h2>
                <h2>Email : {this.props.email}</h2>

            </div>
        )
    }
}
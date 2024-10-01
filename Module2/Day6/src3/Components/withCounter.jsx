import { Component } from "react";
const UpdatedComp=OriginalComp=>{
    class NewComp extends Component {
        constructor(props){
            super(props);
            this.state={
                count : 0,
            }
        }
        increment=()=>{
            this.setState(pre=>{
                return{count:pre.count+1}
            })
    
        }
      render() {
        return (
          <div>
            <OriginalComp  count={this.state.count} 
            increment={this.increment}
            {...this.props} />  
          </div>
        )
      }
    }
    return NewComp;

}
export default UpdatedComp;




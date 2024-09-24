import ElseCode from "./ElseCode";
import IfCode from "./IfCode";

export default function ConditionalComp(){
    let temp=true;
    if(temp){
        return (
            // <div>
            //     <h1>this is if block</h1>
            // </div>
            <>
            <IfCode/>
            </>
        )
        
    }
    else{
        return (
            // <div>
            //     <h1>this is else block</h1>
            // </div>
            <>
            <ElseCode/>
            </>

        )
    }

}
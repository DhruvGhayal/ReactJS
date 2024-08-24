import React,{ Component, useState } from "react";

class Life5 extends Component{

    constructor(){
        super();
        console.warn("constructor")
        this.state={
            count : 0
        }
    }

    shouldComponentUpdate(){
        console.warn(`shouldComponentUpdate`,this.state.count)
        return true; 
    }

    // componentDidMount(){
    //     console.warn("componentDidMount")
    // }

    // componentDidUpdate(lastProps,lastState,snapshot){
    //     console.warn("componentDidUpdate")
    //     console.log(lastState);
    //     if(lastState.count==this.state.count)
    //         {
    //             alert("same")

    //         }
    // }

    render(){
        console.warn("Render Method")
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Update</button>
            </div>
        )
    }
}

export default Life5;
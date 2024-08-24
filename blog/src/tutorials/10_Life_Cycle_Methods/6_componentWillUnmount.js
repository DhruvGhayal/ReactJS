import React,{ Component, useState } from "react";

class Life6 extends Component{

    constructor(){
        super();
        console.warn("constructor")
        this.state={
            name : `Child component + Parent Component`
        }
    }

    componentWillUnmount(){
        alert(`component will unmount call`);
    }

    // shouldComponentUpdate(){
    //     return true; 
    // }

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
        // console.warn("Render Method")
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Life6;
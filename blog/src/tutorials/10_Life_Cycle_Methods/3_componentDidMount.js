import React,{ Component, useState } from "react";

class Life3 extends Component{

    constructor(){
        super();
        console.log("this is constructor it gets executed first")
        this.state={
            name:"Dhruv"
        }
    }

    componentDidMount(){
        console.log("this is component did mount method, it is loaded at last")
    }

    render(){
        console.log("Render Method loads as the component load and it loads everytime as component undergoes change")
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"Dhruv Ghayal"})}}>Update</button>
            </div>
        )
    }
}

export default Life3;
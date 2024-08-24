import React,{ Component } from "react";

class Life2 extends Component{

    constructor(){
        super();
        console.log("this is constructor")
        this.state={
            email:"ghayal@test.com"
        }
    }

    render(){
        console.log("Render Method loads as the component load and it loads everytime as component undergoes change")
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.email}</h1>
            </div>
        )
    }
}

export default Life2;
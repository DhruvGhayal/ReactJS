import React,{Component} from "react";

class Life1 extends Component{

    constructor()
    {
        super();
        console.log("Constructor loads first as the class component loads")
        this.state={
            data:"Dhruv"
        }
    }

    render(){
        console.log("Render loads after constructor")
        return(
            <div>
                <h1>{this.state.data}</h1> 
                <h1>Constructor - Life Cycle</h1>
            </div>
        )
    }
}

export default Life1;
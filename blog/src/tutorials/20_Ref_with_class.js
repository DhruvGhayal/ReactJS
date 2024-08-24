import { Component, createRef } from "react";

class NewRef extends Component{

    constructor(){
        super();
        this.inputRef=createRef();
    }

    getVal(){
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color="red"
        this.inputRef.current.style.backgroundColor="red"

    }
    render(){
        return(
            <>
                <h1>Ref in react</h1>
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=>this.getVal()} >G0!</button>
            </>
        )
    }
}

export default NewRef;
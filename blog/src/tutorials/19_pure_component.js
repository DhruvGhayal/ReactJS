import { PureComponent } from "react";

class Pure extends PureComponent{
    constructor(){
        super()
        this.state={
            count:1
        }}
        render(){
            console.log("Render update")
            return(
                <>
                    <h1>{this.state.count}</h1>
                    <button onClick={()=>this.setState({count:this.state.count+1})}>Go!</button>
                    <br></br>
                    <button onClick={()=>this.setState({count:this.state.count})}>Stop</button>

                </>
            )
        }
    }

    export default Pure;
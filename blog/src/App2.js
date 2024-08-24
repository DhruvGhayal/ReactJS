import './App.css';
import { Component} from "react";
import Life1 from './tutorials/10_Life_Cycle_Methods/1_Constructor';
import Life2 from './tutorials/10_Life_Cycle_Methods/2_Render';
import Life3 from './tutorials/10_Life_Cycle_Methods/3_componentDidMount';
import Life4 from './tutorials/10_Life_Cycle_Methods/4_componentDidUpdate';
import Life5 from './tutorials/10_Life_Cycle_Methods/5_shouldComponentUpdate';
import Life6 from './tutorials/10_Life_Cycle_Methods/6_componentWillUnmount';


// function App() {

//class App for tutorial 10.6----------------------------
class App2 extends Component{
 
    //state for tutorial 10.2
    // const [name, setName]=useState("Dhruv");

    //constructor for tutorial 10.6-----------------------
    constructor(){
      super();
      this.state={
          newname : `Parent component only`,
          toggle : `true`
      }
  }
//below render method for tutorial 10.6--------------------
  render(){
//above render method for tutorial 10.6--------------------    
    return (
    <div className="App">

       {/* 1 to 9 */}
      {/* Check App1.js file */}

      {/* 10 Life Cycle Methods  */}

        {/* 10.1 Constructor */}
        {/* <Life1/> */}

        {/* 10.2 Render */}
        {/* <Life2 name={name}/>
        <button onClick={()=>setName("Dhruv Ghayal")}>Update Name</button> */}

        {/* 10.3 componentDidMount */}
        {/* <Life3/> */}

        {/* 10.4 componentDidUpdate */}
        {/* <Life4/> */}

        {/* 10.5 shouldComponentUpdate */}
        {/* <Life5/> */}
        
        {/* 10.6 componentWillUnmount */}
              {/* {this.state.toggle?
                <Life6/>
                :<h1>{this.state.newname}</h1> }
                <button onClick={()=>{this.setState({toggle:(!this.state.toggle)})}}>
                  Update
                  </button> */}
     
      {/* 11 Hooks */}
      {/* Check App3.js file */}

    </div>
  );
  //below curly bracket for tutorial 10.6----------------------
}
}



export default App2;

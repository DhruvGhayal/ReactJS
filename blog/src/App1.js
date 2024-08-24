import './App.css';

// import Car from './tutorials/1_function_component'
// import Updater from './tutorials/2_state_in_fun_comp';
// import Student from './tutorials/3_props_func_comp';
// import { Component, useState } from "react";
// import InpBox from './tutorials/4_input_box';
// import Toggle from './tutorials/5_toggle';
// import Forms from './tutorials/6_Forms';
// import Profile from './tutorials/7_conditions';
// import Login from './tutorials/8_basic_form_valid'
// import Data from './tutorials/9_func_as_prop';
// import Iteratin from './tutorials/12_map_vs_forLoop'
// import Styling from './tutorials/13_0_All_types_of_css'
// import Details from './tutorials/14_BootStrap_UniqueKey'
// import NewDetails from './tutorials/15_Nesting';
// import UserDetails from './tutorials/16_0_ReuseComponent';
// import Frag from './tutorials/17_Fragment';
// import ChildUser from './tutorials/18_Lifting_State_Up';
// import Pure from './tutorials/19_pure_component';
// import NewRef from './tutorials/20_Ref_with_class';
// import ControlUser from './tutorials/21_Controled_Comp';



function App1() {

  // state for tutorial 3
  // const [name, setname]=useState("Dhruv")

  // function for tutorial 9
    // const getData=()=>alert("hello from app");
 
    //state for tutorial 10.2
    // const [name, setName]=useState("Dhruv");  
    
    // array for tutorial 12
    // const student = ["Anil","Sidhu","Sam","Peter"];

    // for tutorial 18
    //parentAlert is recieving data from child component
    // const parentAlert=(data)=>{
    //   console.log(data)
    //   alert(data.firstname)
    // } 

    return (
    <div className="App">

      {/* 0. Hello World */}
      {/* <h1> hello world </h1> */}

      {/* 1. function Component */}
      {/* <Car></Car> */}

      {/* 2. State */}
      {/* <Updater></Updater> */}

      {/* 3. props */}
      {/* <Student name={name} email={"ghayal@test.com"}/>
      <button onClick={()=>{setname("Dhruv Ghayal")}}>Update</button> */}

      {/* 4. get output on click */}
      {/* <InpBox/> */}

      {/* 5. Toggle */}
      {/* <Toggle/> */}

      {/* 6. Form */}
      {/* <Forms/> */}

      {/* 7. Conditions*/}
      {/* <Profile/> */}

      {/* 8. Basic Validation */}
      {/* <Login/> */}

      {/* 9. function as props  */}
      {/* <Data data={getData} /> */}

      {/* 10 Life Cycle Methods  */}
      {/* Check App2.js file */}

      {/* 11 Hooks */}
      {/* Check App3.js file */}

      {/* 12. Map */}
      {/* <Iteratin/> */}

      {/* 13. css */}
      {/* <Styling/> */}

      {/* 14. bootstrap */}
      {/* <Details/> */}

      {/* 15. Nesting */}
      {/* <NewDetails/> */}

      {/* 16. Reuse component */}
      {/* <UserDetails/> */}

      {/* 17. Fragment */}
      {/* <Frag/> */}

      {/* 18. Lifting State Up / transfer data child to parent */}
      {/* <h1>Parent Component</h1>
      <ChildUser alert={parentAlert}/> */}

      {/* 19. Pure Component */}
      {/* <Pure/> */}

      {/* 20. Ref */}
      {/* <NewRef/> */}

      {/* 21. Controlled Component */}
      {/* <ControlUser/> */}
      
    </div>
  );
}



export default App1;

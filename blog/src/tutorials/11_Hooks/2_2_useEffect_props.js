import React,{useEffect } from "react";

const User = (props)=>{

     useEffect(()=>{
        alert("useEffect with count parameter"+ props.count )    
    },[props.count])
    
    return(
        <div className="App">
            <h1>Count Props : {props.count}</h1>
            {/* <button onClick={()=>setCount(count+1)}>++Count</button> */}
            <h1>Data Props : {props.data}</h1>
            {/* <button onClick={()=>setData(data+1)}>++Data</button> */}
        </div>
        
    )
}

export default User;
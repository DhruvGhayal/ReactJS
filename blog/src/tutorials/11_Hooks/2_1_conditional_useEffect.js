import {useState, useEffect } from "react";
import User from "./2_2_useEffect_props";

const Hook2 = ()=>{
    const [count,setCount] = useState(100)
    const [data, setData] = useState(10)

    // useEffect(()=>{
    //     console.warn("useEffect with count parameter")    
    // },[count])

    // useEffect(()=>{
    //     console.warn("useEffect with data parameter")    
    // },[data])
    
    return(
        <div>
            <User count={count} data={data}/>
            {/* <h1>Count : {count}</h1> */}
            <button onClick={()=>setCount(count+1)}>++Count</button>
            {/* <h1>Data : {data}</h1> */}
            <button onClick={()=>setData(data+1)}>++Data</button>
        </div>
        
    )
}

export default Hook2;
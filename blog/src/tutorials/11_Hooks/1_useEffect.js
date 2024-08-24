import {useState, useEffect } from "react";

const Hook1 = ()=>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
console.warn("useEffect acting like componentDidMount")    })

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>++Count</button>
        </div>
        
    )
}

export default Hook1;
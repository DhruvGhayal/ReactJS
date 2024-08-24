import { useState } from "react";

function Toggle(){
    const [data,setData]=useState("Hello World")
    const [status,setStatus]=useState(true)
    return(
        <div className="Toggle">
            {
                status?<h1>{data}</h1>:null
            }
            <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button>
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default Toggle;
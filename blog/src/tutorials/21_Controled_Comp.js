import { useState } from "react";

const ControlUser=()=>{
    const [val,setVal] = useState("000")


    return(
        <>
            <h1>Controlled</h1>
            <h1>Value : {val}</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}></input>
        </>
    )
}

export default ControlUser;
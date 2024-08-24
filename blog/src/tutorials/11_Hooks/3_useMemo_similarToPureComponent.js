import { useMemo, useState } from "react"

const Calc=()=>{

    const [count,setCount]=useState(0)
    const [data,setData]=useState(10)

    const multiCountMemo = useMemo(()=>{
        return count * 5;
    })

    return(
        <>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <br></br>
            <h1>Data : {data}</h1>
            <button onClick={()=>setData(data*10)}>Update Count</button>
            <br></br>
            <h1>{multiCountMemo}</h1>
        </>
    )
}

export default Calc;
import { useRef } from "react";

const Hook4=()=>{

    let inputRef = useRef(null)

    const getVal=()=>{
        console.warn(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="black"
        inputRef.current.style.display = "none"
    }

    return(
        <>
            <h1>useRef in react</h1>
            <input type="text" ref={inputRef}></input>
            <button onClick={()=>getVal()}>Go!</button>
        </>
    )
}

export default Hook4;
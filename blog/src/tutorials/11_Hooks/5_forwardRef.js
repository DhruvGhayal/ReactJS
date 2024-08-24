import { forwardRef } from "react";

const Hook5=(props,ref)=>{
    let inputRef = forwardRef();

    return(
        <>
            <input type="text" ref={ref}></input>
        </>
    )
}

export default forwardRef(Hook5);
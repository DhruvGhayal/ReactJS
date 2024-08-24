import { useState } from "react";
const UsersAdd=(props)=>{
   
    const [greeting, setGreeting]=useState('')

    const update=()=>{
        setGreeting('Hello');
        alert(greeting);
    }

    return(
        <div>
           
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <span>{props.data.contact}</span>
            <button onClick={update}>Hello</button>

        </div>
    )
}

export default UsersAdd;
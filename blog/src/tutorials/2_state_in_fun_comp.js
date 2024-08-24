import { useState } from "react"

function Updater (){
    const [data, setdata] = useState("This is state example");
    function update(){
        setdata ("Dhruv Ghayal");
        alert(data);
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default Updater;
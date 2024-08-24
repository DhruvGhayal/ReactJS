import { useState } from "react";

function Forms(){

    const[name,setName]=useState("")
    const[tnc,setTnc]=useState(false)
    const[interest,setInterest]=useState("")

    function getFormData(e)
    {
        console.log(name,interest,tnc)
        e.preventDefault()
    }



    return(
        <div>
            <form onSubmit={getFormData}>   {/*<form onSubmit={(e)=>{e.preventDefault}}>*/}
                <fieldset>
                    <legend>Form Practice</legend>
                    <label for = "Name">First Name</label>
                    <input type="text" id="Name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
                    <br></br>
                    <select onChange={(e)=>setInterest(e.target.value)}>
                        <option><i>-Select-</i></option>
                        <option>Marvel</option>
                        <option>DC</option>
                    </select>
                    <br></br>
                    <input type="checkbox" onChange={(e)=>setTnc(e.target.value)}/>Accept terms and conditions<span></span>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Forms;
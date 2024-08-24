import { useState } from "react";

function InpBox () {

    const [inp,setinp]=useState(null)
    const [print, setprint ] = useState(false)
      function getData (val)
      {setinp(val.target.value)}

      return(
        <div>
            {
            print?<h1>{inp}</h1>:null
            }
            <input type='text' onChange={getData} placeholder='Enter name'/>
            <button onClick={()=>{setprint(true)}}>Go!</button>
        </div>

        
      )

      
}

export default InpBox;
import { useState } from "react";

function Profile(){
    const [loggedIn, setLoggedIn]=useState(false)
    const [user, setUser]=useState(1)



    return(
        <div>
            <button onClick={()=>{setLoggedIn(!loggedIn)}}>Log In</button>
            {loggedIn?<h1>Sucessfully Log in!</h1>:<h1>Log in Failed!</h1>}
             
            {user==1?<h1>Welcome user 1</h1>:
            user==2?<h1>Welcome user 2</h1>:
            <h1>Welcome user 3</h1>}
        </div>
    )

}

export default Profile;
import { useState } from "react";

function Login(){

    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const[userErr,setUserErr]=useState(false)
    const[passErr,setPassErr]=useState(false)


    function loginHandle(e){
        (user.length<3||password.length<3)?alert("Enter correct values"):alert("Correct values");
        e.preventDefault();
    }

    function userHandler(e){
        let item =e.target.value;
        (item.length<3)?setUserErr(!userErr):setUserErr(userErr);
        setUser(item)
    }

    function pwdHandler(e){
        let item = e.target.value;
        (item.length<3)?setPassErr(!passErr):setPassErr(passErr);
        setPassword(item)
    }

    return(
        <div>
            <form onSubmit={loginHandle}>
                <legend><b>Login Page</b></legend>
                    <input type="text" 
                            placeholder="Enter User Id" 
                            onChange={userHandler}/>
                            {userErr?<span>UserId Invalid</span>
                            :""}
                    <br></br>
                    <input type="text" 
                            placeholder="Enter User Password" 
                            onChange={pwdHandler}/>
                            {passErr?<span>User Password Invalid</span>
                            :""}
                    <br></br>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;
import { toBeEnabled } from "@testing-library/jest-dom/matchers";
import React from "react";

function Iteratin(){
    const student = [
        {name:"Anil",email:'ghayal@test.com', contact:9428},
        {name:"Sidhu",email:'ghayal@test.com', contact:4282},
        {name:"Sam",email:'ghayal@test.com', contact:2824},
        {name:"Peter",email:'ghayal@test.com', contact:8244}
    ];

    
    return(
        <div>
            <table border="1">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>
            {student.map((i)=>
            <tr>
                <th>{i.name}</th>
                <th>{i.email}</th>
                <th>{i.contact}</th>  
            </tr>
            )}
            </table>
            
        </div>
        )
}

export default Iteratin;
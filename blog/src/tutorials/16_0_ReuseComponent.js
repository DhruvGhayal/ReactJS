import UsersAdd from './16_1_UserComponent';

const UserDetails=()=>{
    const users = [
        {name:"Anil",email:'ghayal@test.com', contact:1111},
        {name:"Sidhu",email:'ghayal@test.com', contact:428435},
        {name:"Sam",email:'ghayal@test.com', contact:282454},
        {name:"Peter",email:'ghayal@test.com', contact:8244}
    ];

    return(
        <div>
            <h1>Reuse component</h1>
            {users.map((item)=>
                    <UsersAdd data={item}/>
           )}
            
        </div>
    )
}

export default UserDetails;
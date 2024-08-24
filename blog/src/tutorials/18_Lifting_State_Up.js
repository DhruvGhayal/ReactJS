import { Fragment } from "react"


const ChildUser=(props)=>{
    //Data is being sent to parent Component
    const data = {
        firstname:'Dhruv',
        lastname:'Ghayal'
    }

    return(
        <Fragment>
            <h1>Child Component</h1>
            <h2>User:{data.firstname}</h2> 
            <button onClick={()=>props.alert(data)}>Click!</button>
        </Fragment>
    )
}

export default ChildUser;
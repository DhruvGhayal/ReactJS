


const User=(props)=>{
    const {data} = props
    return(
        <div>
            <h1>
                {data.name}
            </h1>
            <h1>
                {data.email}
                {data.contact}
            </h1>
        </div>
    )
}

export default User
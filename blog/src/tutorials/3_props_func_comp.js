
function Student(props){
    return(
        <div style={{backgroundColor:"skyblue"}} >
            <h1>This is props example, Hello {props.name}</h1>
            <h1>Email: {props.email}</h1>
        </div>
    )
}

export default Student;
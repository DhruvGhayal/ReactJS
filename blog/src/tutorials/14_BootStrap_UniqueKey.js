import {Table} from 'react-bootstrap'

const Details=()=>{
    const student = [
        {name:"Anil",email:'ghayal@test.com', contact:1111},
        {name:"Sidhu",email:'ghayal@test.com', contact:428435},
        {name:"Sam",email:'ghayal@test.com', contact:282454},
        {name:"Peter",email:'ghayal@test.com', contact:8244}
    ];

    return(
        <Table striped variant='dark'>
            <thead style={{align:'center',color:'red'}}><b>Student Contact</b></thead>

            <tbody>

            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>

            {student.map((item,index)=>
            item.contact === 1111 ?
            <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
            </tr>:null
            )
        }

            </tbody>

        </Table>
    )
}

export default Details;
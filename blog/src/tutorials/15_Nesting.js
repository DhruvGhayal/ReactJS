import {Table} from 'react-bootstrap'

const NewDetails=()=>{
    const student = [
        {
            name:"Anil",
            email:'ghayal@test.com', 
            contact:1111, 
            address:[
                {hn:'10',province:'Surat,Guj',country:'India' },
                {hn:'25',province:'Rajkot,Guj',country:'India' },
                {hn:'430',province:'Navsari,Guj',country:'India' },
                {hn:'490',province:'Valsad,Gujarat',country:'India' },
        ]},
        {name:"Sidhu",email:'ghayal@test.com', contact:428435, 
            address:[
                {hn:'102',province:'Surat,Guj',country:'India' },
                {hn:'925',province:'Rajkot,Guj',country:'India' },
                {hn:'302',province:'Navsari,Guj',country:'India' },
                {hn:'401',province:'Valsad,Gujarat',country:'India' },
        ]},
        {name:"Sam",email:'ghayal@test.com', contact:282454,
            address:[
                {hn:'190',province:'Surat,Guj',country:'India' },
                {hn:'251',province:'Rajkot,Guj',country:'India' },
                {hn:'140',province:'Navsari,Guj',country:'India' },
                {hn:'90',province:'Valsad,Gujarat',country:'India' },
        ]
        },

        {name:"Peter",email:'ghayal@test.com', contact:8244,
            address:[
                {hn:'1',province:'Surat,Guj',country:'India' },
                {hn:'5',province:'Rajkot,Guj',country:'India' },
                {hn:'40',province:'Navsari,Guj',country:'India' },
                {hn:'40',province:'Valsad,Gujarat',country:'India' },
        ]
        }
    ];

    return(
        <Table variant='dark'>
            <div>
            <h1 style={{color:'Black'}}>Client Details</h1>
            </div>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
                
            {student.map((item,index)=>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                        <Table striped variant='dark'>
                            <tbody>
                                {item.address.map((i,n)=>
                                <tr key={n}>
                                    <td>{i.hn}</td>
                                    <td>{i.province}</td>
                                    <td>{i.country}</td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </td>
                </tr>
                )}
            </tbody>

        </Table>
        
    )
}

export default NewDetails ;
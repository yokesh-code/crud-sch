import React from 'react'

function UserTable(props) {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Contact No</th>
            </tr>
        </thead>
        <tbody>
            {
                props.students.length > 0 ? (
                    props.students.map(student =>{
                        const {id,fname,lname,age,phone}=student;
                        return(
                            <tr>
                                <td>{id}</td>
                                <td>{fname}</td>
                                <td>{lname}</td>
                                <td>{age}</td>
                                <td>{phone}</td>
                                <td>
                                    <button onClick={()=>props.deleteUser(id)}>Delete</button>
                                    <button onClick={()=>props.editStudent(id,student)}>Edit</button>
                                </td>
                            </tr>
                        )
                    }) 
                ) : (
                    <tr>
                        <td colSpan={6}>No Students data found</td>
                    </tr>
                )
            }
        </tbody>
    </table>
  )
}

export default UserTable
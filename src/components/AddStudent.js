import React, { useState } from 'react'

function AddStudent(props) {

    const initStudent = {
        id:null,
        fname:"",
        lname:"",
        age:"",
        phone:""
    }
    const [student,setStudents] = useState(initStudent)
    
    const handleChange=(e)=>{ // new user add
        const {name,value} = e.target;
        setStudents({...student, [name]:value})
        console.log(name,value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(student.fname && student.lname){
            handleChange(e,props.addStudent(student))
        }
    }

  return (
    <form>
            <label>First Name</label>
            <input 
            className='u-full-width'
            type='text'
            name="fname"
            value={student.fname}
            onChange={handleChange} />
            
            <label>Last Name</label>
            <input 
             className='u-full-width'
             type='text'
             name="lname"
             value={student.lname}
             onChange={handleChange} />
            
            <label>Age</label>
            <input 
             className='u-full-width'
             type='text'
             name="age"
             value={student.age}
             onChange={handleChange} />
            
            <label>Contact No</label>
            <input
             className='u-full-width'
             type='text'
             name="phone"
             value={student.phone}
             onChange={handleChange} />
            
            <button 
            className='button-primary' 
            type='submit'
            onClick={handleSubmit} >
                Add Student
            </button>
    </form>
  )
}

export default AddStudent
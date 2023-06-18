import React, { useState } from 'react'

function EditStudent(props) {

    const [student,setStudent] = useState(props.currentStudent)
    
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setStudent({...student, [name]:value})
        console.log(name,value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(student.fname && student.lname) props.updateStudent(student)
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
                Edit Student
            </button>

            <button 
            className='button-primary' 
            type='submit'
            onClick={()=> props.setEditing(false)} >
                Cancel Student
            </button>
    </form>
  )
}

export default EditStudent
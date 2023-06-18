import React, { useState } from 'react'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'
import studentList from "./data"
import UserTable from './tables/UserTable'
function App() {


  const [students,setStudents]=useState(studentList)

  const addStudent = student =>{
    student.id= students[students.length - 1].id + 1;
    setStudents([...students,student])
  }

  const deleteUser = id =>{
    setStudents(students.filter(student  => student.id !== id));

  }

  const [editing,setEditing]=useState(false);

  const initialStudent = {
    id:null,
    fname:"",
    lname:"",
    age:"",
    phone:""
  };

  const [currentStudent, setCurrentStudent] = useState(initialStudent)

  const editStudent = (id,student) =>{
    setEditing(true);
    setCurrentStudent(student);
  }

  const updateStudent = (newStudent) =>{
    setStudents(students.map(student => (student.id === currentStudent.id ? newStudent : student)))
  }


  return (
    <div className='container-fluid'>
      <h1>Student Record</h1>
      <div className='row'>
        <div className='five columns'>
          
          {
            editing ? (
              <div>
                <h2>Edit Student</h2>
                <EditStudent
                currentStudent = {currentStudent}
                setEditing={setEditing}
                updateStudent = {updateStudent} />
                </div>
            ):(
          <div>
          <h2>Add Student</h2>
          <AddStudent addStudent={addStudent}/>
          </div>
          
          )
          }
          <div className='seven columns'>
          <h2>View Students</h2>
          <UserTable students={students} deleteUser={deleteUser} editStudent={editStudent} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
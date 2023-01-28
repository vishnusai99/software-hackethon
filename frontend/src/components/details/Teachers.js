import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './teacher.css'

function Teachers() {

    let [teachers,setTeachers] = useState([]);
    const getDoctorsData = ()=>{
        axios.get('http://localhost:8080/teachers')
        .then((res)=>setTeachers(res.data))
    }
    useEffect(getDoctorsData,[])
  return (
    <div className='teacher-table d-flex justify-content-center'>
        <div>
            <h1 className="display-5">School Data</h1>
        <table className='table table-bordered table-hover rounded-2 mt-4'>
            <thead className=''>
                <tr>
                    <th>Teacher Name</th>
                    <th>Subject</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                { 
                    teachers.map((teacher)=>
                    <tr key={teacher.id} className='d-table-row'>
                        <td>{teacher.teacher_name}</td>
                        <td>{teacher.subject}</td>
                        <td>{teacher.contact}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>   
        </div>
    </div>
  )
}

export default Teachers
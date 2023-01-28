import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './doctor.css'

function Doctor() {

    let [doctors,setDoctors] = useState([]);
    const getDoctorsData = ()=>{
        axios.get('http://localhost:8080/doctors')
        .then((res)=>setDoctors(res.data))
    }
    useEffect(getDoctorsData,[])
  return (
    <div className='doctor-table d-flex justify-content-center'>
        <div>
            <h1 className="display-5">Hospital Data</h1>
        <table className='table table-bordered table-hover rounded-2 mt-4'>
            <thead className=''>
                <tr>
                    <th>Doctor Name</th>
                    <th>Specialization</th>
                    <th>Contact</th>
                    <th>Timing - start</th>
                    <th>Timing - end</th>
                </tr>
            </thead>
            <tbody>
                { 
                    doctors.map((doctor)=>
                    <tr key={doctor.id} className='d-table-row'>
                        <td>{doctor.doctor_name}</td>
                        <td>{doctor.specialization}</td>
                        <td>{doctor.contact}</td>
                        <td>{doctor.start_timing}</td>
                        <td>{doctor.end_timing}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>   
        </div>
    </div>
  )
}

export default Doctor
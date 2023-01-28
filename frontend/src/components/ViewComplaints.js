import axios from 'axios'
import React,{useState,useEffect} from 'react'


function ViewComplaints() {
    let [complaints,setComplaints] = useState([])
    const getComplaintsData = ()=>{
        axios.get('http://localhost:8080/complaints')
        .then((res)=>setComplaints(res.data))
    }
    useEffect(getComplaintsData,[])
  return (
    <div>
        <table className='table table-bordered table-hover rounded-2 mt-4'>
            <thead className=''>
                <tr>
                    <th>Complainer Name</th>
                    <th>Detail</th>
                    <th>Contact</th>
                    <th>Domain</th>
                    <th>against</th>
                </tr>
            </thead>
            <tbody>
                { 
                    complaints.map((complaint)=>
                    <tr key={complaint.id} className='d-table-row'>
                        <td>{complaint.complaint_name}</td>
                        <td>{complaint.complaint_detail}</td>
                        <td>{complaint.complainer_phone}</td>
                        <td>{complaint.complaint_domain}</td>
                        <td>{complaint.against_person_name}</td>
                    </tr>
                    )
                }
            </tbody>
        </table> 
    </div>
  )
}

export default ViewComplaints
import React from 'react';
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function SolveComplaint() {
  const navigate = useNavigate();
  const takeAction = async(e)=> {
    e.preventDefault();
    const res = await fetch('/updatecomplaint',{
      method:"PUT",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify({
        complaintid:location.state.complaint._id,
        status:"processing"
      })
    })
    if(res.status===200){
      window.alert("Action Taken Succesfully");
      navigate('/');
    }else{
      window.alert("Something went wrong");
      navigate('/');
    }
  }
  const location = useLocation();
  return (
    <div className="container" id="solvecomplaint">
      <div className="d-flex">
        <div className="left">
          <img src={location.state.complaint.proofimage} alt="db" />
        </div>
        <div className="right">
          <div className='rightbox'>
            <h3>{location.state.complaint.problem}</h3>
            <p><b>Description</b><br />
              <small>{location.state.complaint.description}</small>
            </p>
            <p><b>Address</b><br />
              <small><b>Address line:</b> {location.state.complaint.address} </small><br />
              <small><b>Landmark:</b> {location.state.complaint.landmark}</small><br />
              <small><b>City:</b> {location.state.complaint.city}</small><br />
              <small><b>Pincode:</b> {location.state.complaint.pincode}</small>
            </p>
            <p><b>Applicant Details</b><br />
              <small><b>Name:</b> {location.state.user.name} </small><br />
              <small><b>Email:</b> {location.state.user.email}</small><br />
              <small><b>Phone:</b> {location.state.user.phone}</small>
            </p>
          </div>
          {location.state.complaint.status === "pending" && <button className='btn btn-danger' onClick={takeAction} >Take Action Now</button>}
          {location.state.complaint.status === "processing" && <button className='btn btn-warning' >Upload Completed Proof</button>}
          {location.state.complaint.status === "completed" && <button className='btn btn-success' disabled >Succesfully Solved Problem</button>}
        </div>
      </div>
    </div>
  )
}

export default SolveComplaint

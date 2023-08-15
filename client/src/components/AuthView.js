import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function AuthView(props) {
    const userid = props.complaint.userid;
    const [user, setUser] = useState([]);
    console.log(props.complaint);
    const getUser = async (userid) => {
        try {
            const res = await fetch('/getuser', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: userid
                })
            })
            const data = await res.json();
            setUser(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUser(userid);
    }, [userid])
    return (
        <>
            <NavLink className="col-md-3 mb-4 text-dark text-decoration-none" to="/solve-complaint" state={{complaint:props.complaint,user:user}}>
                <div className="complaint">
                    <div className='view'>
                    <span style={{ "display": "flex", justifyContent: "space-between", "alignItems": "center" }}>
                            <span style={{ "display": "flex", "lineHeight": "50px", "alignItems": "center" }}>
                                <div className="profile_image "></div> <h6 className='mx-2 mt-2'>{user.name}</h6></span>
                            {props.complaint.status === "pending" && <small><i className="fa fa-clock"></i> Pending </small>}
                            {props.complaint.status === "processing" && <small><i className="fa fa-spinner"></i> On Process </small>}
                            {props.complaint.status === "completed" && <small><i className="fa fa-check"></i> Solved </small>}
                        </span>
                            <small style={{ fontSize: "10px",fontWeight:"600" }}><i className="fa fa-map-marker"></i> {props.complaint.landmark}</small>

                        <div className="image"><img src={props.complaint.proofimage} alt="" width="100%" height="100%" style={{objectFit:"cover"}} /></div>
                        <h6 className='my-3'>{props.complaint.problem}</h6>
                        <div className="comments">{props.complaint.description}</div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default AuthView

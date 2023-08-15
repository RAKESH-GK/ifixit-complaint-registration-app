import React from 'react'

function LoadMyComplaint(props) {
    return (
        <>
            <div className="col-md-4 mb-4" >
                <div className="complaint">
                    <div className='view'>
                    <span style={{ "display": "flex", justifyContent: "space-between", "alignItems": "center" }}>
                            <span style={{ "display": "flex", "lineHeight": "50px", "alignItems": "center" }}>
                                <div className="profile_image "></div> <h6 className='mx-2 mt-2'>{props.user.name}</h6></span>
                            {props.complaint.status === "pending" && <small><i className="fa fa-clock"></i> Pending </small>}
                            {props.complaint.status === "processing" && <small><i className="fa fa-spinner"></i> On Process </small>}
                            {props.complaint.status === "completed" && <small><i className="fa fa-check"></i> Solved </small>}
                        </span>
                        <small style={{ fontSize: "10px",fontWeight:"600" }}><i className="fa fa-map-marker"></i> {props.complaint.landmark}</small>
                        <div className="image"><img src={props.complaint.proofimage} alt="" width="100%" height="100%" style={{objectFit:"cover"}} /></div>
                        <h6 className='my-3'> {props.complaint.problem}</h6>
                        <div className="comments"><small>{props.complaint.description}</small></div>
                        <small className="date" style={{ fontSize: "10px" }}>{props.complaint.date}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadMyComplaint

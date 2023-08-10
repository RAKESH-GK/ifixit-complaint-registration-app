import React, { useState } from 'react'

export default function RaiseComplaints() {

    const [problemCategory, setProblemCategory] = useState("");
    const [proofImage, setProofImage] = useState("");
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [comments, setComments] = useState("");

    return (
        <div id="raise_complaints">
            <div className="container">
                <div className="form">
                    <h3>Register New Complaint</h3><br />
                    <form action="" autoComplete='none'>
                        <div style={{ "display": "flex" }}>
                            <div class="form-floating mb-3  w-100" style={{ "marginRight": "15px" }}>
                                <select class="form-select" id="floatingSelect" value={problemCategory} onChange={(e) => setProblemCategory(e.target.value)} aria-label="Floating label select example">
                                    <option value=" ">Select</option>
                                    <option value="Garbage Collection Problem">Garbage Collection Problem</option>
                                    <option value="Water Pipe Likage Problem">Water Pipe Likage Problem</option>
                                    <option value="Street Light Problem">Street Light Problem</option>
                                </select>
                                <label for="floatingSelect">Problem category</label>
                            </div>
                            <div className="form-floating mb-3 w-100">
                                <input type="file" className="form-control" id="floatingInput" value={proofImage} onChange={(e) => setProofImage(e.target.value)} placeholder="name@example.com" autoComplete="none" />
                                <label htmlfor="floatingInput">Upload Image</label>
                            </div>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" id="floatingPassword" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Password" autoComplete="none" />
                            <label htmlfor="floatingPassword">Address</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" id="floatingPassword" value={landmark} onChange={(e) => setLandmark(e.target.value)} placeholder="Password" autoComplete="none" />
                            <label htmlfor="floatingPassword">Landmark</label>
                        </div>
                        <div style={{ "display": "flex" }}>
                            <div className="form-floating mb-3 w-50" style={{ "marginRight": "15px" }}>
                                <input type="text" className="form-control" id="floatingPassword" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Password" autoComplete="none" />
                                <label htmlfor="floatingPassword">City</label>
                            </div>
                            <div className="form-floating mb-3  w-50">
                                <input type="text" className="form-control" id="floatingPassword" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Password" autoComplete="none" />
                                <label htmlfor="floatingPassword">Pin Code</label>
                            </div>
                        </div>
                        <div class="form-floating mb-3 w-100">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={comments} onChange={(e) => setComments(e.target.value)} style={{ "height": "100px" }}></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                        <input type="reset" class="btn btn-success " value="Reset" />
                        <input type="submit" class="btn btn-success mx-3" value="Send" />
                    </form>
                </div>
                <div className="preview">
                    <div className='view'>
                        <span style={{ "display": "flex", "lineHeight": "50px", "alignItems": "center" }}><div className="profile_image "></div> <h5 className='mx-2 mt-2'> User name</h5></span>
                        <small className='mx-5'>{landmark}</small>
                        <div className="image"><img src={proofImage} width="100" height="100" alt="" /></div>
                        <h5 className='my-3'>{problemCategory}</h5>
                        <div className="comments">{comments}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RaiseComplaints() {
    const [toastMessage, setToastMessage] = useState();
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [problemCategory, setProblemCategory] = useState("");
    const [proofImage, setProofImage] = useState("");
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [comments, setComments] = useState("");

    const [user, setUser] = useState({});
    function resetForm() {
        setUserId("");
        setProblemCategory("");
        setProofImage("");
        setAddress("");
        setLandmark("");
        setCity("");
        setPincode("");
        setComments("");
    }
    const loadAboutPage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUser(data);
            setUserId(data.email);
            if (res.status !== 200) {
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }

    useEffect(() => {
        loadAboutPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function hideToast() {
        document.getElementById("toast").style.display = "none";
    }
    // const [file, setFile] = useState();

    const imageChange = async (e) => {
        e.preventDefault();
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            setProofImage(reader.result);
        };
        reader.onerror=(err)=>{
            console.log(err);
        };
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/complaint", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                userid: userId,
                problem: problemCategory,
                proofimage: proofImage,
                address: address,
                landmark: landmark,
                city: city,
                pincode: pincode,
                description: comments
            })
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            setToastMessage(data.error);
            document.getElementById("toast").style.display = "block";
        } else {
            setToastMessage(data.message);
            document.getElementById("toast").style.display = "block";
            window.alert(data.message);
            navigate('/my-complaints');
        }
    }
    return (
        <div id="raise_complaints">
            <div className="container">
                <div className="form" aria-multiline>
                    <h3>Register New Complaint</h3><br />
                    <div id="toast" className="toast align-items-center text-white bg-warning border-0 w-100 mb-3" role="alert" aria-live="assertive" aria-atomic="true" style={{ display: "none" }}>
                        <div className="d-flex">
                            <div className="toast-body">
                                {toastMessage}
                            </div>
                            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={hideToast}></button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete='none'>
                        <div style={{ "display": "flex" }}>
                            <div className="form-floating mb-3  w-100" style={{ "marginRight": "15px" }}>
                                <select className="form-select" id="floatingSelect" value={problemCategory} onChange={(e) => setProblemCategory(e.target.value)} aria-label="Floating label select example">
                                    <option value=" ">Select</option>
                                    <option value="Garbage Collection Problem">Garbage Collection Problem</option>
                                    <option value="Water Pipe Likage Problem">Water Pipe Likage Problem</option>
                                    <option value="Street Light Problem">Street Light Problem</option>
                                </select>
                                <label htmlFor="floatingSelect">Problem category</label>
                            </div>
                            <div className="form-floating mb-3 w-100">
                                <input type="file" className="form-control" accept="image/gif, image/jpeg, image/png" onChange={imageChange} placeholder="name@example.com" autoComplete="none" />
                                <label htmlFor="floatingInput">Upload Image</label>
                            </div>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Password" autoComplete="none" />
                            <label htmlFor="floatingPassword">Address</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" value={landmark} onChange={(e) => setLandmark(e.target.value)} placeholder="Password" autoComplete="none" />
                            <label htmlFor="floatingPassword">Landmark</label>
                        </div>
                        <div style={{ "display": "flex" }}>
                            <div className="form-floating mb-3 w-50" style={{ "marginRight": "15px" }}>
                                <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Password" autoComplete="none" />
                                <label htmlFor="floatingPassword">City</label>
                            </div>
                            <div className="form-floating mb-3  w-50">
                                <input type="text" className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Password" autoComplete="none" />
                                <label htmlFor="floatingPassword">Pin Code</label>
                            </div>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <textarea className="form-control" placeholder="Leave a comment here" value={comments} onChange={(e) => setComments(e.target.value)} style={{ "height": "100px" }}></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                        <input type="submit" className="btn btn-success " value="Send" />
                        <input type="reset" className="btn btn-success mx-3" onClick={resetForm} value="Reset" />
                    </form>
                </div>
                <div className="preview">
                    <div className='view'>
                        <span style={{ "display": "flex", "lineHeight": "50px", "alignItems": "center" }}><div className="profile_image "></div> <h5 className='mx-2 mt-2'> {user.name}</h5></span>
                        <small className='mx-5'>{address} {landmark} {city} {pincode}</small>
                        <div className="image"><img src={proofImage} id="displayimg" width="100%" height="100%" style={{objectFit:"cover"}} alt="" /></div>
                        <h5 className='my-3'>{problemCategory}</h5>
                        <div className="comments">{comments}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


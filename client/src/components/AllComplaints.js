import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AllComplaints() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
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
    return (
        <div id="all-complaints">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="complaint">
                            <div className='view'>
                                <span style={{ "display": "flex", "lineHeight": "50px", "alignItems": "center" }}>
                                    <div className="profile_image "></div> <h5 className='mx-2 mt-2'> User name</h5></span>
                                <small className='mx-5'>Landmark</small>
                                <div className="image"></div>
                                <h5 className='my-3'>Problem Category</h5>
                                <div className="comments">comments display here</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

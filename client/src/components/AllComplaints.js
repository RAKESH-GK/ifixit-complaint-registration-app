import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadComplaints from './LoadComplaints';

export default function AllComplaints() {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
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
                    <LoadComplaints />
                </div>
            </div>
        </div>
    )
}

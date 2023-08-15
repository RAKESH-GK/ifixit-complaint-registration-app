import React, { useState, useEffect } from 'react';
import Complaint from './Complaint';
import AuthView from './AuthView';

function LoadComplaints(props) {
    const [AllComplaints, setAllComplaints] = useState([]);

    const loadComplaints = async () => {
        try {
            const response = await fetch('/allcomplaints', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            setAllComplaints(result);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        loadComplaints();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                AllComplaints.map((complaint) => {
                    if (props.auth === true) {
                        return (
                            <AuthView complaint={complaint} key={complaint._id} />
                        )
                    } else {
                        return (
                            <Complaint complaint={complaint} key={complaint._id} />
                        )
                    }
                })
            }
        </>
    )
}

export default LoadComplaints

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate();
    const [toastMessage, setToastMessage] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function hideToast() {
        document.getElementById("toast").style.display = "none";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
               email,password
            })
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            setToastMessage(data.error)
            document.getElementById("toast").style.display = "block";
        } else {
            window.alert(data.message);
            navigate('/');
        }
    }
        return (
            <div id="log-in">
                <div className="container">
                    <div className="login-box">
                        <h3 className='text-center pb-3'>Login</h3>
                        <div id="toast" className="toast align-items-center text-white bg-warning border-0 w-100 mb-3" role="alert" aria-live="assertive" aria-atomic="true" style={{ display: "none" }}>
                            <div className="d-flex">
                                <div className="toast-body">
                                    {toastMessage}
                                </div>
                                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={hideToast}></button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} autoComplete='none'>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    onClick={hideToast}
                                />
                                <label htmlFor="floatingPassword">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    onClick={hideToast}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="button justifyContent-center">
                                <input type="submit" className="btn btn-success " value="Submit" />
                            </div>
                        </form>
                        <div className="pt-3">
                            <small>Don't have account? <a href="/sign-in">Signin now</a></small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
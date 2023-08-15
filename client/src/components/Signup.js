import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const [toastMessage, setToastMessage] = useState();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInput = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    function hideToast() {
        document.getElementById("toast").style.display = "none";
    }

    function resetForm() {
        setUser({ name: "", email: "", phone: "", password: "", cpassword: "" });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            setToastMessage(data.error);
            document.getElementById("toast").style.display = "block";
        } else {
            setToastMessage(data.message);
            document.getElementById("toast").style.display = "block";
            window.alert(data.message);
            navigate('/login');
        }
    }
    return (
        <>
            <div id="sign-in">
                <div className="container">
                    <div className="signin-box">
                        <h3 className='text-center pb-3'>Signin</h3>
                        <div id="toast" class="toast align-items-center text-white bg-warning border-0 w-100 mb-3" role="alert" aria-live="assertive" aria-atomic="true" style={{ display: "none" }}>
                            <div class="d-flex">
                                <div class="toast-body">
                                    {toastMessage}
                                </div>
                                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={hideToast}></button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="none"
                                    name='name'
                                    value={user.name}
                                    onChange={handleInput} />
                                <label htmlfor="floatingPassword">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="none"
                                    name='phone'
                                    value={user.phone}
                                    onChange={handleInput} />
                                <label htmlfor="floatingPassword">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="none"
                                    name='email'
                                    value={user.email}
                                    onChange={handleInput} />
                                <label htmlfor="floatingPassword">Email</label>
                            </div>
                            <div className="form-floating mb-3" onClick={hideToast}>
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="off"
                                    name='password'
                                    value={user.password}
                                    onChange={handleInput} />
                                <label htmlfor="floatingPassword" >Password</label>
                            </div>
                            <div className="form-floating mb-3" onClick={hideToast}>
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="off"
                                    name='cpassword'
                                    value={user.cpassword}
                                    onChange={handleInput} />
                                <label htmlfor="floatingPassword">Confirm Password</label>
                            </div>
                            <div className="button justifyContent-center">
                                <input type="submit" class="btn btn-success mx-3 w-25 " value="Submit"/>
                                <input type="button" class="btn btn-success  mx-3 w-25" value="Reset" onClick={resetForm} />
                            </div>
                        </form>
                        <div className="pt-3">
                            <small>Already have account? <a href="/log-in">Login now</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }


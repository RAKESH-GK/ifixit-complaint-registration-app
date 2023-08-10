import React from 'react'

export default function AuthorityLogin() {
    return (
        <div id="authority-log-in">
            <div className="container">
                <div className="login-box">
                    <h3 className='text-center pb-3'>Authority Login</h3>
                <form action="" autoComplete='none'>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="none" />
                        <label htmlfor="floatingPassword">Authority Id</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Password" autoComplete="none" />
                        <label htmlfor="floatingPassword">Password</label>
                    </div>
                   <div className="button justifyContent-center">
                   <input type="submit" class="btn btn-success " value="Submit" />
                   </div>
                </form>
                </div>
            </div>
        </div>
    )
}

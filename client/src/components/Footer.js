import React from 'react'

export default function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3 footer-col bottom-logo">ifixit</div>
                    <div className="col-md-3 footer-col">Contact Us</div>
                    <div className="col-md-3 footer-col">Important Links<br/>
                    <a href="/authority-login"><small>Authority Login</small></a><br/>
                    </div>
                    <div className="col-md-3 footer-col">Need Help?</div>
                </div>
            </div>
        </div>
    )
}

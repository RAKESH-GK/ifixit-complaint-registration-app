import React, { } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {

  return (
      <div id='header'>
        <div className="container">
          <NavLink className='logo text-light' to='/'>ifixit</NavLink>
          <div>
            <NavLink className='btn btn-light mx-1' to='/login' >Login</NavLink>
            <NavLink className='btn btn-light mx-1' to='/signup'>register</NavLink>
            <NavLink className='btn btn-light mx-1' to=''>logout</NavLink>
          </div>
        </div>
        <div className="sub-header" >
          <div className='menu-first bg-light'></div>
          <div className="menu-bar bg-light">
            <div><NavLink to="/">Home</NavLink> </div>
            <div><NavLink to="/all-complaints">All Complaints</NavLink> </div>
            <div><NavLink to="/my-complaints">My Complaints</NavLink> </div>
          </div>
          <div className='menu-last bg-light'>
            <NavLink to="/raise-complaints"><button>Raise Complaint</button></NavLink>
          </div>
        </div>
        {/* <div className="toast-message text-dark py-3 text-center bg-light">
          <span><i className='fa fa-exclamation-triangle'></i></span>
          <small> Login to see your profile and raise complaints </small>
          <span><a href=""><button className='btn btn-sm btn-warning'>login now</button></a></span></div> */}
      </div >
  )
}

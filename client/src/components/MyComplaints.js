import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadMyComplaint from './LoadMyComplaint';

export default function MyComplaints() {
  const [myComplaints, setMyComplaints] = useState([]);
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
      const response = await fetch('/getmycomplaints', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userid: user.email
        })
      });
      const result = await response.json();
      setMyComplaints(result);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadAboutPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div id="my_complaints">
      <div className="container">
        <div className='profile_container'>
          <div className="profile">
            <div className="profile_image">
            </div>
          </div>
          <div >
            <h4 className='pb-3'>{user.name}</h4>
            <div className="info bg-secondary py-3">
            <p><i className="fa fa-envelope"></i> {user.email}</p>
            <p><i className="fa fa-phone"></i> {user.phone}</p>
            </div>
          </div>
        </div>
        <div className='complaints'>
          <div className="row">
            {
              myComplaints.map((complaint) => {
                return (
                  <>
                    <LoadMyComplaint complaint={complaint} user={user} key={complaint._id} />
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [total, setTotal] = useState(0);
  const [solved, setSolved] = useState(0);
  const [processing, setProcessing] = useState(0);

  const loadComplaints = async () => {
    try {
      const response = await fetch('/getcounts', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (response.status === 200) {
        setTotal(data.total.length);
        setSolved(data.solved.length);
        setProcessing(data.processing.length);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    loadComplaints();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container justify-content-center" id="home-start">
      <div className="row">
        <div className="col carousal">
        </div>
      </div>
      <div id='home'>
        <div className="row ">
          <div className=' col-md-3'>
            <div className="sub-container">
              <div className="title">Total Registred Complaints</div>
              <div className='count'>{total}</div>
            </div>
          </div>
          <div className=' col-md-3'>
            <div className="sub-container">
              <div className="title">Solved</div>
              <div className='count'>{solved}</div>
            </div>
          </div>
          <div className=' col-md-3'>
            <div className="sub-container">
              <div className="title">On Process</div>
              <div className='count'>{processing}</div>
            </div>
          </div>
          <div className=' col-md-3'>
            <div className="sub-container">
              <div className="title">Pending</div>
              <div className='count'>{total-(processing+solved)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

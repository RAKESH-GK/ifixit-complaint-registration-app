import React from 'react'

export default function Home() {

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
            <div className='count'>999+</div>
            </div>
        </div>
        <div className=' col-md-3'>
            <div className="sub-container">
            <div className="title">Solved</div>
            <div className='count'>999+</div>
            </div>
        </div>
        <div className=' col-md-3'>
            <div className="sub-container">
            <div className="title">On Process</div>
            <div className='count'>999+</div>
            </div>
        </div>
        <div className=' col-md-3'>
            <div className="sub-container">
            <div className="title">Pending</div>
            <div className='count'>999+</div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

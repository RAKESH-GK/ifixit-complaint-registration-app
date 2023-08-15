import React, { useEffect, useState } from 'react';
import LoadComplaints from './LoadComplaints';

export default function ViewComplaints() {
   
    return (
        <div id="all-complaints">
            <div className="container">
                <div className="row">
                    <LoadComplaints auth={true}/>
                </div>
            </div>
        </div>
    )
}

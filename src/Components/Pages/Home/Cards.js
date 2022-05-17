import React from 'react';
import time from "../../../assets/icons/clock.svg"
import phone from "../../../assets/icons/phone.svg"
import marker from '../../../assets/icons/marker.svg'
const Cards = () => {
    return (
        <div className='m-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>

       
       
<div className="card lg:card-side bg-base-100 shadow-xl bg-success">
  <figure><img src={phone} alt="Album" className='p-4' /></figure>
  <div className="card-body text-white">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl bg-info">
  <figure><img src={time} alt="Album" className='p-4' /></figure>
  <div className="card-body text-white">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl bg-success">
  <figure><img src={marker} alt="Album" className='p-4' /></figure>
  <div className="card-body text-white">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
</div>
    );
};

export default Cards;
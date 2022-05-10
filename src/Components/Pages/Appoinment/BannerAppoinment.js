import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import dChair from "../../../assets/images/chair.png"
const BannerAppoinment = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='p-10'>
            
            <div className="card lg:card-side pt-14 px-8">
            <div className='p-5'>
  <Calendar onChange={onChange} value={value} />
  </div>
  <figure><img src={dChair} className="w-3/4" alt="Album" /></figure>
  
</div>
        </div>
    );
};

export default BannerAppoinment;
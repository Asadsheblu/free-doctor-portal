import React, { useState } from 'react';
import AppoinmentLists from './AppoinmentLists';
import BannerAppoinment from './BannerAppoinment';


const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <BannerAppoinment date={date} setDate={setDate} />
            <AppoinmentLists date={date} />
            
           
        </div>
    );
};

export default Appoinment;
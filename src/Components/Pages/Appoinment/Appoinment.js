import React from 'react';
import AppoinmentLists from './AppoinmentLists';
import BannerAppoinment from './BannerAppoinment';

const Appoinment = () => {
    return (
        <div>
            <BannerAppoinment />
            <AppoinmentLists />
        </div>
    );
};

export default Appoinment;
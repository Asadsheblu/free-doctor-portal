import React from 'react';
import treatment from "../../../assets/images/treatment.png"
const Care = () => {
    return (
        <div className='m-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='mx-14 px-14'>
                <img src={treatment} alt="" className='h-min w-min' />
            </div>
            <div className='mt-14 pt-10 justify-center item-center'>
                <h3 className='text-2xl'>Exceptional Dental Care, on Your Terms</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
            </div>
        </div>
    );
};

export default Care;
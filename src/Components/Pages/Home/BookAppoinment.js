import React from 'react';
import doctor from "../../../assets/images/doctor.png"
import appoinment from "../../../assets/images/appointment.png"
const BookAppoinment = () => {
    return (
        <section style={{background:`url(${appoinment})`}} className='flex justify-items-center items-center text-white m-14 pt-10 px-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 pb-5'>
                <h4 className="text-secondary font-bold">Appointment</h4>
                <h3 className='text-2xl font-bold '>Make an appointment Today</h3>
                <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
            </div>


        </section>
    );
};

export default BookAppoinment;
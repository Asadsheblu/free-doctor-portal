import React from 'react';

const AppoinmentLists = () => {
    
    
    const appoinments=[
        {
        _id:1,
        title:"Teeth Orthodontics",
        time:"8:00 AM - 9:00 AM",
        available:"10 SPACES AVAILABLE"

    },
    {
        _id:2,
        title:"Cosmetic Dentistry",
        time:"10:00 AM - 11:00 AM",
        available:"10 SPACES AVAILABLE"

    },
    {
        _id:3,
        title:"Teeth Cleaning",
        time:"11:05 AM - 12:10 PM",
        available:"10 SPACES AVAILABLE"

    },
    {
        _id:4,
        title:"Teeth Orthodontics",
        time:"8:00 AM - 9:00 AM",
        available:"15 SPACES AVAILABLE"

    },
    {
        _id:5,
        title:"Teeth Orthodontics",
        time:"8:00 AM - 9:00 AM",
        available:"10 SPACES AVAILABLE"

    },
    {
        _id:6,
        title:"Teeth Cleaning",
        time:"9:00 AM - 10:00 AM",
        available:"10 SPACES AVAILABLE"

    },
    {
        _id:7,
        title:"Teeth Orthodontics",
        time:"8:00 AM - 9:00 AM",
        available:"10 SPACES AVAILABLE"

    },
    {
        _id:8,
        title:"Teeth Orthodontics",
        time:"8:00 AM - 9:00 AM",
        available:"10 SPACES AVAILABLE"

    },
    {
        _id:9,
        title:"Teeth Orthodontics",
        time:"8:00 AM - 9:00 AM",
        available:"10 SPACES AVAILABLE"

    }
]
    return (
        <div className='p-10'>
            <h4 className='text-xl text-secondary text-center font-bold'>Available Appointments on April 30, 2022</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-6'>
                {
                    appoinments.map(list=><div key="list._id">
                        <div class="card w-96 bg-base-100 shadow-xl">

  <div className="card-body items-center text-center">
    <h2 className="card-title text-secondary">{list?.title}</h2>
    <h4 className='text-xl'>{list?.time}</h4>
    <h6>{list?.available}</h6>
    
    <div class="card-actions">
    <button className="btn text-white font-bold bg-gradient-to-r from-secondary to-primary ">Book Appoinment</button>
    </div>
  </div>
</div>
                    </div>)
                }



            </div>
        </div>
    );
};

export default AppoinmentLists;
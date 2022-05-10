import React, { useState } from 'react';
import { format } from 'date-fns';
import BookingModal from './BookingModal';
const AppoinmentLists = ({date}) => {
    const [modal,setModal]=useState(null)
    
    const appoinments=[
        {
        _id:1,
        title:"Teeth Orthodontics",
       slot:[
        "08.00 AM - 08.30 AM",
        "08.30 AM - 09.00 AM",
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"
      ],
       

       

    },
    {
        _id:2,
        title:"Cosmetic Dentistry",
       slot:[
        
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"
      ]
        

    },
    {
        _id:3,
        title:"Teeth Cleaning",
       slot:[
        
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"
      ],
        

    },
    {
        _id:4,
        title:"Teeth Orthodontics",
       slot:[
          "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"
      ],
       

    },
    {
        _id:5,
        title:"Teeth Orthodontics",
       slot:[
        
        "10.30 AM - 11.00 AM",
        "11.30 AM - 12.00 AM"
      ]
        

    },
    {
        _id:6,
        title:"Teeth Cleaning",
       slot:[
        "08.00 AM - 08.30 AM",
        "08.30 AM - 09.00 AM",
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"
      ]
        

    },
    {
        _id:7,
        title:"Teeth Orthodontics",
       slot:[
        
      ]
        

    },
    {
        _id:8,
        title:"Teeth Orthodontics",
       slot:[
        "04.00 AM - 05.30 PM",
        "04.00 AM - 05.30 PM",
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"
      ],
        

    },
    {
        _id:9,
        title:"Teeth Orthodontics",
       slot:["05.00 AM - 0.30 PM",
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"]
        

    }
]
    return (
        <div className='p-10'>
            <h4 className='text-xl text-secondary text-center font-bold'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-6'>
                {
                    appoinments.map(list=><div key="list._id">
                        <div class="card w-96 bg-base-100 shadow-xl">

  <div className="card-body items-center text-center">
    <h2 className="card-title text-secondary">{list?.title}</h2>
    <h4 className='text-xl'>
        {
            list.slot.length > 0 
            ?
            <span>{ list.slot[0]}</span>
            :
            <span className='text-red-500'>Please try Next Day</span>
        }
                </h4>
    <h6>Today {list?.slot.length} Serial Available</h6>
    
    <div class="card-actions">
    
    <label onClick={()=>setModal(list)} disabled={list?.slot.length===0}  for="my-modal-6" class="btn text-white font-bold bg-gradient-to-r from-secondary to-primary ">Book Appoinment</label>
    </div>
  </div>
</div>
                    </div>)
                }
            {modal && <BookingModal setModal={setModal} modal={modal}></BookingModal>   }


            </div>
        </div>
    );
};

export default AppoinmentLists;
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookingModal from './BookingModal';
import Myserial from '../../Myserial/Myserial';
const AppoinmentLists = ({date}) => {
    const [modal,setModal]=useState(null)
    const [serials,setSerial]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5500/serial')
        .then(res=>res.json())
        .then(data=>setSerial(data))
        
    },[])
    
    return (
        <div className='p-10'>
            <h4 className='text-xl text-secondary text-center font-bold'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-6'>
                {
                    serials?.map(lists=><div key={lists?._id}>
                        <div class="card w-96 bg-base-100 shadow-xl">

  <div className="card-body items-center text-center">
    <h2 className="card-title text-secondary">{lists?.name}</h2>
                        <p className="text-center text-xl">${lists?.price}</p>
    <h4 className='text-xl'>
        {
            lists?.slots?.length > 0 
            ?
            <span>{ lists?.slots[0]}</span>
            :
            <span className='text-red-500'>Please try Next Day</span>
        }
                </h4>
    <h6>Today {lists?.slots?.length} Serial Available</h6>
    
    <div class="card-actions">
    
    <label onClick={()=>setModal(lists)} disabled={lists?.slots?.length===0}  for="my-modal-6" class="btn text-white font-bold bg-gradient-to-r from-secondary to-primary ">Book Appoinment</label>
    </div>
  </div>
</div>
                    </div>)
                }
            {modal && <BookingModal date={date} setModal={setModal} modal={modal}></BookingModal>   }


            </div>
        </div>
    );
};

export default AppoinmentLists;
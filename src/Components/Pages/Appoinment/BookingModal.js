import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
const BookingModal = ({modal,setModal,date}) => {

    const {_id,name,slots}=modal
    const [user]=useAuthState(auth)
    const formattedDate = format(date, 'PP');
    const handelSerial=(e)=>{
       e.preventDefault()
        const name=e.target.name.value;
        const number=e.target.number.value;
        const email=e.target.email.value;
        const slot=e.target.slot.value;
        const age=e.target.age.value;
       const problem=e.target.problem.value
        const details={name,number,email,slot,age,problem}
        console.log(details);
        setModal(null)
        fetch("http://localhost:5500/patients",{
          method:"POST",
            headers:{
              'content-type':"application/json"
          
          },
          body:JSON.stringify(details)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.success){
            alert(`Appointment is set, ${formattedDate} at ${slot}`)
          }
          else{
            alert.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
        }
        })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">
      <h4 className='text-xl text-center text-secondary font-bold py-4'>Booking For {name}</h4>
      <form onSubmit={handelSerial}>
      <div className="card-body">
      <input type="text"value={format(date, 'PP')} className="input input-bordered" required/>
          <label className="label">
            <span className="label-text">Patient's Name</span>
          </label>
          <input name="name" type="text" value={user?.displayName} className="input input-bordered" required/>
     
   
          <label className="label">
            <span className="label-text">Patient's Number</span>
          </label>
          <input name="number" type="text"  className="input input-bordered" required/>
    
          <label className="label">
            <span className="label-text">Serial Time</span>
          </label>
          <select name="slot" class="select select-bordered w-full max-w-xs">
          <option disabled selected>Serial</option>
          {
              slots?.map(slot=><option value={slot}>{slot}</option>)
          }

  
  
</select>
        
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="text" value={user?.email}className="input input-bordered" required />
     
    
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input name="age" type="number" placeholder="Age" className="input input-bordered"required />
          
       
          <label className="label">
            <span className="label-text">Your Problem</span>
          </label>
          <textarea placeholder='problem description' name='problem' rows="" cols=""></textarea>
     
        <input  className='btn btn-primary' type="submit" value="AddSerial" />
        
       
      </div>
      </form>
    </div>
   
  </div>
</div>

        </div>
    );
};

export default BookingModal;
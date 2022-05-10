import React from 'react';

const BookingModal = ({modal,setModal}) => {
    const {title,slot}=modal
    const handelSubmit=(e)=>{
       e.preventDefault()
        const name=e.target.name.value;
        const number=e.target.number.value;
        const email=e.target.email.value;
        const slot=e.target.slot.value;
        const age=e.target.age.value;
       
        const details={name,number,email,slot,age}
        console.log(details);
        setModal(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">
      <h4 className='text-xl text-center text-secondary font-bold py-4'>Booking For {title}</h4>
      <form onSubmit={handelSubmit}>
      <div className="card-body">
     
          <label className="label">
            <span className="label-text">Patient's Name</span>
          </label>
          <input name="name" type="text" placeholder="Patient's Name" className="input input-bordered" required/>
     
   
          <label className="label">
            <span className="label-text">Patient's Number</span>
          </label>
          <input name="number" type="text" placeholder="Patient's Number" className="input input-bordered" required/>
    
          <label className="label">
            <span className="label-text">Serial Time</span>
          </label>
          <select name="slot" class="select select-bordered w-full max-w-xs">
          <option disabled selected>Serial</option>
          {
              slot.map(slots=><option value={slots}>{slots}</option>)
          }

  
  
</select>
        
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="text" placeholder="email" className="input input-bordered" required />
     
    
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input name="age" type="number" placeholder="Age" className="input input-bordered"required />
          
       
          <label className="label">
            <span className="label-text">Your Problem</span>
          </label>
          {/* <textarea name="problem" type="number" placeholder="problem description" className="input input-bordered" required /> */}
     
        <input type="submit" value="Submit" />
        
       
      </div>
      </form>
    </div>
   
  </div>
</div>

        </div>
    );
};

export default BookingModal;
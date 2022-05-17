import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { format } from 'date-fns';
import Serial from '../../Hook/Serial';
const Myserial = () => {
 const [modal,setModal]=Serial()

  
    const [myItems,setItems]=useState([])
    const [dsolution,setDsolution]=useState([])
    const [loading,setLoading]=useState(false)
    const [user]=useAuthState(auth)
    const [date, setDate] = useState(new Date());
    const navigate=useNavigate()
    
    useEffect(()=>{
        fetch('http://localhost:5500/patients/')
        .then(res=>res.json())
        .then(data=>{
          setLoading(true)
          setItems(data)})
    },[])
      const handelPres=(e)=>{
            e.preventDefault()
            const post=e.target.post.value
            console.log(post);
            fetch("http://localhost:5500/solution",{
          method:"POST",
            headers:{
              'content-type':"application/json"
          
          },
          body:JSON.stringify({post})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
      }   
      useEffect(()=>{
        fetch('http://localhost:5500/solution/')
        .then(res=>res.json())
        .then(data=>{
          setLoading(true)
          setDsolution(data)})
    },[])
          
    return (
       
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-16 mt-'>
            {
               myItems.map(items=><div>
                <div class="card w-96 bg-secondary text-white">
  <div class="card-body">
   {modal?.name}
  <h4 className='text-xl text-red-700 text-center font-bold'>Available Appointments on {format(date, 'PP')}</h4>
    <h4 className='text-red-500'>Your id:{items?._id}</h4>
    <h2 class="card-title">Your Name:{items?.name}</h2>
    <h5 className='text-red-700'>Your Serial Time : {items?.slot}</h5>
    <p className='text-accent'>Problems: {items?.problem}</p>
    <h2 class="text-red-600">Your Email:{items?.email}</h2>

<label for="my-modal-3" class="btn modal-button">Doctors Prescription</label>


<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box  bg-primary relative">
  

    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
    <form onSubmit={handelPres}>
    <textarea name="post" class="textarea textarea-primary w-4/5 text-accent" placeholder="Bio"></textarea>
    <input className="btn modal-button" type="submit" value="Post" />
    </form>
    {
        dsolution.map(solution=><div key={solution?._id}>
            <h4 className='text-red-700'>{solution?.post}</h4>
        </div>
        )
    }
  </div>
</div>
  </div>
</div>
               </div>) 
            }
        </div>
    );
};

export default Myserial;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myappoinment = () => {
    const [Myappoinment,setMyAppoinment]=useState([])
    const [user]=useAuthState(auth)
    useEffect(()=>{
        const email=user?.email
        console.log(email);
        if(user){
        fetch(`http://localhost:5500/myappopinment?email=${user?.email}`,{
            method:"GET",
            headers:{
                authorization:`bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>setMyAppoinment(data))
    }
    },[user])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-6'>
            {
                Myappoinment?.map(my=><div>
                    <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">{my?.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn">Buy Now</button>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default Myappoinment;
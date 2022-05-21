import React, { useEffect, useState } from 'react';

const OurDoctor = () => {
    const [doctors,setDoctor]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5500/doctor',{
            method:"GET",
            headers:{
              authorization:`bearer ${localStorage.getItem("accessToken")}`
            }
            
        })
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    return (
        <div class="p-14 grid grid-cols-1 lg:grid-cols-3">
            {
                doctors?.map(doctor=>
                    <div key={doctor?._id}>
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img class="h-44" src={doctor?.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
     {doctor?.name}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>{doctor?.email}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">{doctor?.specilaity}</div> 
     
    </div>
  </div>
</div>
                    </div>
                )
            }
        </div>
    );
};

export default OurDoctor;
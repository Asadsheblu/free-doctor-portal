import React, { useEffect, useState } from 'react';
import Mangerow from './Mangerow';

const Managedoctor = () => {
    const [doctors,setDoctor]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5500/doctor',{
            method:"GET",
            authorization:`bearer ${localStorage.getItem("accessToken")}`
        })
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    return (
        <div>
           <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>SPecilaity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        doctors?.map((doctor,index)=><Mangerow key={doctor?._id} doctor={doctor} index={index}></Mangerow>)
    }
      
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Managedoctor;
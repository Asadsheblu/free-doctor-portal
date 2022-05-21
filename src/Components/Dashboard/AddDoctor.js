import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Pages/SharedPage/Loading/Loading';

const AddDoctor = () => {
const [service,setService]=useState()
const [user,loading]=useAuthState(auth)
useEffect(()=>{
    fetch('http://localhost:5500/serial')
    .then(res=>res.json())
    .then(data=>setService(data))
},[])
const imageKey="8883b33790ee9795a35b86084c95369f"
    const addDoctor=(e)=>{
        e.preventDefault()
        
        const name=e.target.name.value
        const email=e.target.email.value
        const specilaity=e.target.specilaity.value
        const image=e.target.image.files[0]
        const data={name,email,specilaity,image}
        
        const formData=new FormData()
        formData.append('image',image)
        const url=`https://api.imgbb.com/1/upload?key=${imageKey}`
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                const img=data.data.url
                const doctor={
                    name:name,
                    email:email,
                    specilaity:specilaity,
                    img:img

                }
                fetch('http://localhost:5500/doctor',{
                    method:"POST",
                    headers:{
                        "content-type":"application/json",
                        authorization:`bearer ${localStorage.getItem("accessToken")}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        window.location.reload()
                        alert("Doctor added")
                    }
                    console.log(data);
                })
            }
            console.log(data);
        })
        if(loading){
            return <Loading></Loading>
        }
    }
    return (
        <div>
             <div className='p-14 w-75 shadow-2xl mx-auto'>
            <form onSubmit={addDoctor} className="mx-auto">
                
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="Email here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select name='specilaity' class="select select-bordered w-full max-w-xs">
            {
                service?.map(services=><option key={services?._id} value={services?.name}>{services?.name}</option>)
            }
  
</select>
<label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="file" name='image' class="input input-bordered w-full max-w-xs" />
          
          <br />
          <input type="submit" className='btn btn-success mt-3' value="Add Doctor" />
          
            
          
            </form>
            </div>
        </div>
    );
};

export default AddDoctor;
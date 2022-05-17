import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserRow from './UserRow';


const User = () => {
    const [users,setUsers]=useState([])
    const [refetch]=useAuthState(auth)
    
    useEffect(()=>{
        fetch('http://localhost:5500/user',{
          method:"GET",
          headers:{
            authorization:`bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
   
    
    return (
        <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map(user=><UserRow user={user} refetch={refetch}></UserRow>)
      }
      
      </tbody>
      </table>
      </div>
    
    );
};

export default User;
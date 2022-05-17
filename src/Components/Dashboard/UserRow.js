import React from 'react';
import {toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role}=user
    const makeAdmin=()=>{
        fetch(`http://localhost:5500/user/admin/${email}`,{
            method:"PUT",
            headers:{
                authorization:`bearer ${localStorage.getItem("accessToken")}`
              }
        })
        .then(res=>{
            if(res.status===403){
               alert("You Are not eligable for add admin")
            }
           return res.json()
        })
        .then(data=>{
            if(data.modifycount>0){
                window.location.reload()
                alert(`Congratrulation!!${email} Now Your Are Admin`)
            }
            
    })
    }
    return (
        <div>
            <tr>
        
        <td>{user?.email}</td>
        
        <td>
            {role?
            <button disabled onClick={makeAdmin} class="btn btn-xs">Already Admin</button>
            :
            <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>
            }
            
            </td>
       
        <td><button class="btn btn-xs">Remove</button></td>
      </tr>
        </div>
    );
};

export default UserRow;
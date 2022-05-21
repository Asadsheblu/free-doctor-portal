import React from 'react';

const Mangerow = ({doctor,index}) => {
    const {name,img,specilaity,email}=doctor
    const handelDelete=(email)=>{
            fetch(`http://localhost:5500/doctor/${email}`,{
                method:"DELETE",
                headers:{
                    authorization:`bearer ${localStorage.getItem("accessToken")}`
                  }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    window.location.reload()
                    alert("Doctor Removed")
                    
                }
            })
    }
    return (
        <div>
            <tr>
        <th>{index+1}</th>
        <td><img className="w-20 rounded" src={img} alt="" /></td>
        <td>{name}</td>
        <td>{specilaity}</td>
        <td><button onClick={()=>handelDelete(email)}>Delete</button></td>
      </tr>
        </div>
    );
};

export default Mangerow;
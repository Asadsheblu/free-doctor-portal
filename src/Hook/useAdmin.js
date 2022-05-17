import { useEffect, useState } from "react"

const useAdmin=user=>{
    const [admin,setAdmin]=useState(false)
    const [adminLOading,setAdminLoading]=useState(true)
    useEffect(()=>{
        const email=user?.email
        if(email){
            fetch(`http://localhost:5500/admin/${email}`,{
                method:"GET",
                headers:{
                    "content-type":"application/json",
                    authorization:`bearer ${localStorage.getItem("accessToken")}`
                }
               
            })
            .then(res=>res.json())
            .then(data=>{
                setAdmin(data.admin)
                setAdmin(false)
            
            })
        }
    },[user])
    return [admin,adminLOading]
}
export default useAdmin
import { useEffect, useState } from "react"

const Serial=()=>{
    const [modal,setModal]=useState(null)
    const [serials,setSerial]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5500/serial')
        .then(res=>res.json())
        .then(data=>setSerial(data))
        
    },[])
    return [serials,setSerial,modal,setModal]
}
export default Serial
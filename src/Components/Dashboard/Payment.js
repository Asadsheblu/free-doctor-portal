import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Pages/SharedPage/Loading/Loading';
import Checkoutform from './Checkoutform';
import {
  
  Elements,
 
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1X09Axl651FBGiX3GTztTGcIxhHgaG82QPnzAcXrPDLuCLckDypW6Rl2H6e02LNKroDzKfmAGqD9yvSm0PDO0p00cBN92ybx');
const Payment = () => {
    const {id}=useParams()
  
    const [infos,setInfos]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5500/myappopinment/${id}`,{
            method:"GET",
            headers:{
            authorization:`bearer ${localStorage.getItem("accessToken")}`
            }
           
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
            setInfos(data)
        })
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {
            infos.map(info=><div key={info?._id}>
                <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Hey!!{info?.name}</h2>
    <p>DO You Want To Live Support Prescribtion??Please Pay and Get Live Doctor Link.</p>
    <h4 className="text-2xl text-purple-700">Your Support Time:{info?.slot}</h4>
    <h6 className="text-xl text-primary">Your Payment: {info?.price}</h6>
    <div>
    <Elements stripe={stripePromise}>
    <Checkoutform info={info}></Checkoutform>
  </Elements>
  </div>
  </div>
</div>
                </div>)
        }
        </div>
    );
};

export default Payment;
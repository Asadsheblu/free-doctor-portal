import React,{useState} from 'react';
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
    Link,
  } from "react-router-dom";
  import { getAuth, RecaptchaVerifier } from "firebase/auth";
import auth from "../../../../firebase.init"
import useToken from '../../../../Hook/useToken';
const SignIn = () => {
    const [email,setEmail]=useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );



  const [signInWithGoogle,guser] = useSignInWithGoogle(auth);
  if(error){
   toast(error.message)
  }
  const handelEmail=(e)=>{
    setEmail(e.target.value)
  }
  let navigate = useNavigate();
  let location = useLocation();
  const [token]=useToken(user || guser)

  let from = location.state?.from?.pathname || "/";
  if(token){
    navigate(from, { replace: true });
  }
    const handelSignIn=async(e)=>{
        e.preventDefault()
      
       
        const pass=e.target.password.value 
       
        
       await signInWithEmailAndPassword(email,pass)
       
       
    }
   
    return (
        <div>
            <div className='p-14 justify-items-center shadow-2xl'>
            <form onSubmit={handelSignIn}>
                
          
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" onBlur={handelEmail} placeholder="Email here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password here" class="input input-bordered w-full max-w-xs" />
         <h6>Are You New Free Doctor Portal?<Link className='text-xl text-primary' to="/signUp">Please Registration</Link></h6>
         <p>Forget Password? <input  onClick={async (e) => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }} type="button" className='text-red-500 text-xl' value="Reset" /> </p>
          <br />
          <input type="submit" className='btn btn-success mt-3' value="SignIn" />
         
  <div className="divider w-1/4">OR</div>
            <button className="btn btn-info" onClick={() => signInWithGoogle()}>Sign In With Google</button>
            <ToastContainer />
            </form>
        </div>
        </div>
    );
};

export default SignIn;
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../../../Hook/useToken';
import { Navigate, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth); const [updateProfile, updating] = useUpdateProfile(auth);
      const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
      );
      const [signInWithGoogle,guser] = useSignInWithGoogle(auth);
      const [token]=useToken(user || guser)
      const navigate=useNavigate()
      if(token){
        navigate('/')
      }
if(error){
    toast(error?.message)
}
    const handelSignup=async(e)=>{
        e.preventDefault()
       const displayName=e.target.name.value
        const email=e.target.email.value
        const pass=e.target.password.value 
        const cPass=e.target.cPass.value
        if(pass!==cPass){
            toast("Your Two Password don't match..Please try To Again")
            return
        }
        if(pass.length<6){
            toast('Please type password at least 6 character')
        }
       await createUserWithEmailAndPassword(email,pass)
        await updateProfile({ displayName });
        toast('Updated profile');
        await sendEmailVerification();
        toast('Sent email');
    }
    return (
        <div className='p-14 w-4/5 shadow-2xl mx-auto'>
            <form onSubmit={handelSignup} className="mx-auto">
                
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="Email here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password here" class="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Confrim Password</span>
          </label>
          <input type="password" name='cPass' placeholder="Confrim Password here" class="input input-bordered w-full max-w-xs" />
          <br />
          <input type="submit" className='btn btn-success mt-3' value="Registration" />
          <div className="divider w-1/4">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-info">Sign In With Google</button>
          <ToastContainer />
            </form>
           
           
            
       
        </div>
    );
};

export default Signup;
import React from 'react';
import bg from "../../../assets/images/appointment.png"
const Contact = () => {
    return (
        <div style={{background:`url(${bg})`}} className="p-10">
            <h4 className='text-xl text-secondary text-center font-bold'>Contact Us</h4>
            <h3 className='text-2xl text-center text-white'>Stay connected with us</h3>
            <div>
            
  <div className="hero-content w-full flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;
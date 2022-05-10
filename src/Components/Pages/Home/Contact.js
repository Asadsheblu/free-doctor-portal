import React from 'react';
import bg from "../../../assets/images/appointment.png"
const Contact = () => {
    return (
        <div style={{background:`url(${bg})`}} className="p-10">
            <h4 className='text-xl text-secondary text-center font-bold'>Contact Us</h4>
            <h3 className='text-2xl text-center text-white'>Stay connected with us</h3>
            <div>
            
  <div class="hero-content w-full flex-col lg:flex-row-reverse">
  
    <div class="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;
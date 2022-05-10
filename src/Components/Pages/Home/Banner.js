import React from 'react';
import chair from "../../../assets/images/chair.png"
const Banner = () => {
    return (
        <div>
            
<div class="card lg:card-side pt-14 px-8">
  <figure><img src={chair} alt="Album" /></figure>
  <div class="card-body pt-10">
    <h2 className="card-title pt-5 text-3xl">Your New Smile Starts Here</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint natus velit possimus aut! Inventore est illo fugiat fugit ut. ! Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    <div class="justify-center">
    <button className="btn text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
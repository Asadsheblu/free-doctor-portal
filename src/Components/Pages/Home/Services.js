import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import tooth from "../../../assets/images/whitening.png"
const Services = () => {
    return (
        <div>
           <h2 className='text-center text-primary font-bold'>OUR SERVICES</h2>
           <h3 className='text-3xl text-center'>Services We Provide</h3>
        <div className='m-14 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={fluoride} alt="fluoride" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Fluoride Treatment</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={cavity} alt="cavity" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Cavity Filling</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={tooth} alt="tooth" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Teeth Whitening</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default Services;
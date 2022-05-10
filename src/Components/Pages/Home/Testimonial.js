import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import img1 from "../../../assets/images/people1.png"
import img2 from "../../../assets/images/people2.png"
import img3 from "../../../assets/images/people3.png"
const Testimonial = () => {
    const review=[{
            _id:1,
            Name:'Jeson Herry',
            Location:"California",
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:img1

    },
   
    {
        _id:2,
        Name:'Kuron Herry',
        Location:"California",
        description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img:img2

},
{
    _id:3,
    Name:'Winson Herry',
    Location:"California",
    description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    img:img3

}]
    return (
        <section>
            <div className='flex justify-between'>
            <div>
                <h3 className='text-xl text-secondary'>Testimonial</h3>
                <h2 className='text-2xl'>What Our Patients Says</h2>

            </div>
            
            <div>
        <img src={quote} className="w-32" alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

          
            {
                review.map(testi=><div  key={testi._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    <p>{testi?.description}</p>
    <div className="flex pt-5">
        <div className="flex-1">
            <img src={testi?.img} alt="" />
        </div>
        <div className="flex-1">
           <h3 className='text-xl font-bold'>{testi?.Name}</h3>
           <h3>{testi?.Location}</h3>
        </div>
    </div>
  </div>
</div>
                </div>)
            }
              </div>
        </section>
    );
};

export default Testimonial;
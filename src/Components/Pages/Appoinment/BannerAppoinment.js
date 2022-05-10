
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import dChair from "../../../assets/images/chair.png"
const BannerAppoinment = ({date,setDate}) => {
  
    
    
    return (
        <div className='p-10'>
            
            <div className="card lg:card-side pt-14 px-8">
            <div className='p-5'>
            <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    
    />
  </div>
  <figure><img src={dChair} className="w-3/4" alt="Album" /></figure>
  
</div>
        </div>
    );
};

export default BannerAppoinment;
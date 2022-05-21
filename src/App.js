import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Pages/SharedPage/Navbar/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/SharedPage/Footer/Footer';
import Appoinment from './Components/Pages/Appoinment/Appoinment';
import Myappoinment from './Components/Pages/Appoinment/Myappoinment';
import Signup from './Components/Pages/Signup/Signup';
import SignIn from './Components/Pages/Signup/Signin/SignIn';
import RequireAuth from './Components/Pages/Signup/RequireAuth/RequireAuth';
import Myserial from './Components/Myserial/Myserial';
import Review from './Components/Dashboard/Review';
import User from './Components/Dashboard/User';
import Dashboard from './Components/Dashboard/Dashboard';
import RequireAdmin from './Components/Pages/Signup/RequireAuth/RequireAdmin';
import AddDoctor from './Components/Dashboard/AddDoctor';
import OurDoctor from './Components/Pages/OurDoctor';
import Managedoctor from './Components/Pages/Managedoctor';
import Payment from './Components/Dashboard/Payment';

function App() {
  return (
    <div>
     
      <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/appoinment' element={<RequireAuth>
        <Appoinment/>
      </RequireAuth>}></Route>
      <Route path="/payment/:id" element={<Payment></Payment>}></Route>
      <Route path='/doctor' element={<RequireAuth>
        <OurDoctor/>
      </RequireAuth>}></Route>
      <Route path='/myappoinment' element={<Myappoinment />
    }></Route>
      <Route path='/dashboard' element={<RequireAuth>
        <Dashboard/>
      </RequireAuth>}>
        <Route index element={<Myserial />}></Route>
        <Route path="review" element={<Review />}></Route>
        <Route path="user" element={

          <User />
        }></Route>
        
        <Route path="addDoctor" element={
          <AddDoctor />
        }></Route>
        <Route path="managed" element={
          <Managedoctor />
        }></Route>
        
      </Route>
      <Route path='/signUp' element={<Signup />}></Route>
      
      <Route path='/login' element={<SignIn />}></Route>
    </Routes>
   
    <Footer />
    </div>
  );
}

export default App;

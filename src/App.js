import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Pages/SharedPage/Navbar/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/SharedPage/Footer/Footer';
import Appoinment from './Components/Pages/Appoinment/Appoinment';

function App() {
  return (
    <div>
     
      <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/appoinment' element={<Appoinment/>}></Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar1 from './components/NavbarV1/Navbar1'
import Landingpage from './pages/Landingpage/Landingpage'
import Footer from './components/Footer/Footer'
import Signup from './pages/SignUp/Signup';
import Login from './pages/SignUp/Login';
import Navbar2 from './components/NavbarV2/Navbar2';
import Feeds from './pages/Feeds/Feeds';
import Network from './pages/MyNetwork/Network';

function App() {
const isLogin = true;

  return (
    <>
     {/* Outer start */}
     <div className='bg-gray-100 w-[100%] h-[100%] box-border'>
      {isLogin ? <Navbar2/> : <Navbar1/>}
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feeds' element={<Feeds/>}/>
        <Route path='/mynetwork' element = {<Network/>}/>
      </Routes>
    
      <Footer/>
     </div>
     {/* Outer end */}

    </>
  )
}

export default App

import { useState,useEffect } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import './App.css'
import Navbar1 from './components/NavbarV1/Navbar1'
import Landingpage from './pages/Landingpage/Landingpage'
import Footer from './components/Footer/Footer'
import Signup from './pages/SignUp/Signup';
import Login from './pages/SignUp/Login';
import Navbar2 from './components/NavbarV2/Navbar2';
import Feeds from './pages/Feeds/Feeds';
import Network from './pages/MyNetwork/Network';
import Resume from './pages/Resume/Resume';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import Activities from './pages/Profile/Activities';
import SingleActivity from './pages/Profile/SingleActivity';
import Notification from './pages/Notifications/Notification';

import axios from 'axios';

function App() {
  const[isLogin,setIsLogin] = useState(localStorage.getItem("isLogin"));

  //Ise login comp me bhjege
  const changeLoginValue = (val)=>{
    setIsLogin(val)
  }
  return (
    <>
     {/* Outer start */}
     <div className='bg-gray-100 w-[100%] h-[100%] box-border'>
      {isLogin ? <Navbar2/> : <Navbar1/>}
      <Routes>
        <Route path='/' element={isLogin?<Navigate to={'/feeds'}/>:<Landingpage logIn={changeLoginValue}/>}/>
        <Route path='/signup' element={isLogin?<Navigate to={'/feeds'}/>:<Signup logIn={changeLoginValue}/>}/>
        <Route path='/login' element={isLogin?<Navigate to={'/feeds'}/>:<Login logIn={changeLoginValue}/>}/>
        <Route path='/feeds' element={<Feeds/>}/>
        <Route path='/mynetwork' element = {<Network/>}/>
        <Route path='/resume' element = {<Resume/>}/>
        <Route path='/message' element = {<Messages/>}/>
        <Route path='/notification' element = {<Notification/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/profile/:id/activities' element={<Activities/>}/>
        <Route path='/profile/:id/activities/:postId' element={<SingleActivity/>}/>
      </Routes>
    
      <Footer/>
     </div>
     {/* Outer end */}

    </>
  )
}

export default App

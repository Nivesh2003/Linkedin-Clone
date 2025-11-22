import React from 'react'
import { Link,Navigate, useNavigate} from 'react-router-dom'
import Googlelogincomponent from '../../components/GoogleLogin/Googlelogincomponent'
import { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'; //Used to create a pop up type error in top corner
import axios from 'axios';

function Signup() {
  const nav = useNavigate();
  const [registerField,setRegisterField] = useState({email:"" ,password:"", f_name:""})

  const handleInput = (e,key)=>{
    setRegisterField({...registerField,[key]:e.target.value})
  }

  const handleRegister = async () => {
    if (registerField.email.trim().length === 0 || registerField.password.trim().length === 0 || registerField.f_name.trim().length===0) {
      return toast.error("Please fill all details")
    }
    await axios.post('http://localhost:3000/api/auth/register',registerField).then((res)=>{
      window.alert("Registered successfully");
      setRegisterField({...registerField,email:"",password:"",f_name:""})
      nav('/login')
    }).catch(err=>{
      console.log(err)
      toast.error(err?.response?.data?.error)
    })
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-4xl mb-5"> Make the most of your professional life </div>
       
      <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10 mb-2'>

      <form action="" autoComplete='off'>
      <div className="flex-flex-col gap-4">
          <div>
            <label htmlFor='email'>Email</label>
            <input value={registerField.email} onChange={(e) => handleInput(e, "email")} type="email" id="email" className='w-full text-xl border-2 rounded-lg px-5 py-1'placeholder='Enter your Email'/>
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input value={registerField.password} onChange={(e) => handleInput(e, "password")} type="password" id="password" className='w-full text-xl border-2 rounded-lg px-5 py-1'placeholder='Enter your Password'/>
          </div>

          <div>
            <label htmlFor='fullname'>Full name</label>
            <input value={registerField.f_name} onChange={(e) => handleInput(e, "f_name")} type="text" id="fullname" className='w-full text-xl border-2 rounded-lg px-5 py-1'placeholder='Enter your full name'/>
          </div>

          <div onClick={handleRegister} className="w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-3">
            Register
          </div>
        </div>
        </form>

        {/* Google sign in */}
        <div className="flex flex-row items-center gap-2">
          <div className="border-b-1 border-gray-400 w-[45%] "/>or <div className="border-b-1 border-gray-400 w-[45%] "/>
        </div>
        <Googlelogincomponent/>
      </div>
       
       <div className="mt-4 mb-10">Already on LinkedIn? <Link to={'/login'}><span className='text-blue-800 hover:underline cursor-pointer'>Sign In</span></Link></div>
       <ToastContainer/>
    </div>
  )
}

export default Signup
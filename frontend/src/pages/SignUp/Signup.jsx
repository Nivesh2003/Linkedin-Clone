import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-4xl mb-5"> Make the most of your professional life </div>
       
      <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10 mb-2'>

      <form action="" autoComplete='off'>
      <div className="flex-flex-col gap-4">
          <div>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" className='w-full text-xl border-2 rounded-lg px-5 py-1'placeholder='Enter your Email'/>
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" className='w-full text-xl border-2 rounded-lg px-5 py-1'placeholder='Enter your Password'/>
          </div>

          <div>
            <label htmlFor='fullname'>Full name</label>
            <input type="text" id="fullname" className='w-full text-xl border-2 rounded-lg px-5 py-1'placeholder='Enter your full name'/>
          </div>

          <div className="w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-3">
            Register
          </div>
        </div>
        </form>
        
        {/* Google sign in */}
        <div className="flex flex-row items-center gap-2">
          <div className="border-b-1 border-gray-400 w-[45%] "/>or <div className="border-b-1 border-gray-400 w-[45%] "/>
        </div>
        <div>Google login button</div>
      </div>
       
       <div className="mt-4 mb-10">Already on LinkedIn? <Link to={'/login'}><span className='text-blue-800 hover:underline cursor-pointer'>Sign In</span></Link></div>
    </div>
  )
}

export default Signup
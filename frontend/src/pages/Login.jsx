import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>
                <div className="text-3xl text-center">Sign In</div>
                <div className="my-3">Google login button</div>
                {/* Divider */}
                <div className="flex flex-row items-center gap-2">
                    <div className="border-b-1 border-gray-400 w-[45%] " />or <div className="border-b-1 border-gray-400 w-[45%] " />
                </div>
                {/* Divider */}

                <form action="" autoComplete='off'>
                    {/* hidden dummy fields */}
                    <input type="text" name="fakeusernameremembered" autoComplete="off" style={{ display: 'none' }} />
                    <input type="password" name="fakepasswordremembered" autoComplete="new-password" style={{ display: 'none' }} />
                    <div className="flex-flex-col gap-4">
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Enter your Email' />
                        </div>

                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Enter your Password' />
                        </div>


                        <div className="w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-3">
                            Login
                        </div>
                    </div>
                </form>

            </div>
            <div className="mt-4 mb-10">New to LinkedIn? <Link to={'/signup'} className='text-blue-800'>Join Now</Link></div>
        </div>
    )
}

export default Login
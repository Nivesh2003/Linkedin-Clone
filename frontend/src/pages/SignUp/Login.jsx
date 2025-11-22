import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Googlelogincomponent from '../../components/GoogleLogin/Googlelogincomponent'
import {ToastContainer,toast} from 'react-toastify'; //Used to create a pop up type error in top corner
import axios from 'axios';
const Login = (props) => {
    const nav = useNavigate();
    const [loginField,setLoginField] = useState({email:"",password:""})
    const onChangeInput = (e,key)=>{
        setLoginField({...loginField,[key]:e.target.value})
    }
    const handleLogin = async () => {
        if (loginField.email.trim().length === 0 || loginField.password.trim().length === 0) {
            return toast.error("Please fill all credentials")
        }

        await axios.post('http://localhost:3000/api/auth/login', loginField,{withCredentials:true}).then((res) => {
            props.logIn(true)
            localStorage.setItem('isLogin','true'); //To conditionally render login pag
            localStorage.setItem('userInfo',JSON.stringify(res.data.userExist));
            nav('/feeds')
        }).catch(err => {
            console.log(err)
            toast.error(err?.response?.data?.error)
        })

    }
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>
                <div className="text-3xl text-center">Sign In</div>
                <div className="my-3">
                    <Googlelogincomponent/>
                </div>
                {/* Divider */}
                <div className="flex flex-row items-center gap-2">
                    <div className="border-b-1 border-gray-400 w-[45%] " />or <div className="border-b-1 border-gray-400 w-[45%] " />
                </div>
                {/* Divider */}

                <form action="" autoComplete='off'>
                    <div className="flex-flex-col gap-4">
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type="email" value={loginField.email} onChange={(e)=>{onChangeInput(e,'email')}} id="email" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Enter your Email' />
                        </div>

                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type="password" value={loginField.password} onChange={(e)=>{onChangeInput(e,'password')}} id="password" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Enter your Password' />
                        </div>


                        <div onClick={handleLogin} className="w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-3">
                            Login
                        </div>
                    </div>
                </form>

            </div>
            <div className="mt-4 mb-10">New to LinkedIn? <Link to={'/signup'} className='text-blue-800'>Join Now</Link></div>
            <ToastContainer/>
        </div>
    )
}

export default Login
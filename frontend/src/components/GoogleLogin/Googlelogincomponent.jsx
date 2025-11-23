import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
function Googlelogincomponent(props) {
    const nav = useNavigate();
    const handleOnSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential;
         const res = await axios.post('http://localhost:3000/api/auth/google',{token},{withCredentials:true})
            localStorage.setItem('isLogin','true');
            localStorage.setItem('userInfo',JSON.stringify(res.data.user))
            props.logIn(true);
            nav('/feeds')
    }
    return (
        <div className='w-full'>
            <GoogleLogin
                onSuccess={(credentialResponse) => handleOnSuccess(credentialResponse)}
                onError={() => {
                    console.log('Login Failed');
                }}
            /></div>
    )
}

export default Googlelogincomponent
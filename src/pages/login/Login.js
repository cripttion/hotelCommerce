import React, { useState } from 'react'
import './login.css'
import { CupSoda, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
function Login() {
    const navigate = useNavigate();
    const[username,setUserName] = useState('');
    const [password,setpassword] = useState('');
    const[isClicked,setIsClicked] = useState('false');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('https://apis.ccbp.in/login',{
                username:username,
                password:password
            })
          console.log(response); 
            Cookies.set('jwt', response.jwt_token);
            setUserName('');
            setpassword('');
            navigate('/');
            

        }catch(error)
        {
            // navigate('/login');
            console.log(error);
        }
    }
  return (
    <div className='loginMain'>
        <div className='loginbox'>
            <form onSubmit={handleSubmit}>
                <h2 className='logintitle'>Login To your Account<CupSoda color='red' /></h2>
                <input onChange={(e)=>setUserName(e.target.value)} value={username} type='text' placeholder='user-id'className='userinput'/>
                <div className='passwordfield'>
                <input onChange={(e)=>setpassword(e.target.value)}  type={`${isClicked?'text':'password'}`} placeholder='*********' value={password} />
                <div className='viewpassword' onClick={()=>setIsClicked(!isClicked)}>{!isClicked?<EyeOff />:<Eye />}</div>
                </div>
                <button type='submit' className='submitButton'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login
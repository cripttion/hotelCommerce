import React, { useState } from 'react';
import './login.css';
import { CupSoda, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://apis.ccbp.in/login', {
        username: username,
        password: password,
      });

      console.log(response);
      Cookies.set('jwt', response.jwt_token);
      setUserName('');
      setpassword('');
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setIsClicked(!isClicked);
  };

  const renderLoginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <h2 className='logintitle'>
          Login To your Account<CupSoda color='red' />
        </h2>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          type='text'
          placeholder='user-id'
          className='userinput'
        />
        <div className='passwordfield'>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type={`${isClicked ? 'text' : 'password'}`}
            placeholder='*********'
            value={password}
          />
          <div
            className='viewpassword'
            onClick={handleTogglePasswordVisibility}
          >
            {!isClicked ? <EyeOff /> : <Eye />}
          </div>
        </div>
        <button type='submit' className='submitButton'>
          Login
        </button>
      </form>
    );
  };

  const renderLoggedInView = () => {
    // Redirect to home page or show home page content
    return (
      <div>
        You are logged in! Redirecting to home page...
        {/* You can also include home page content here */}
      </div>
    );
  };

  return <div className='loginMain'>{isLoggedIn ? renderLoggedInView() : renderLoginForm()}</div>;
}

export default Login;

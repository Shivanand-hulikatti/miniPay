import React, { useState } from 'react'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
        <Heading label={"Sign in"} className="text-2xl font-bold text-gray-800" />
        <SubHeading label={"Enter your credentials to access your account"} className="text-sm text-gray-600 mb-6" />
        <InputBox 
          onChange={e => setUsername(e.target.value)} 
          placeholder="david@gmail.com" 
          label={"Email"} 
          className="mb-4" 
        />
        <InputBox 
          onChange={e => setPassword(e.target.value)} 
          placeholder="123456" 
          label={"Password"} 
          className="mb-6" 
        />
        <div className='pt-5'>
        <Button 
          onClick={async () => {
            const response = await axios.post("https://minipayb.onrender.com/api/v1/user/signin", {
              username,
              password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          }} 
          label={"Sign in"} 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200" 
        />
        </div>
        <div className="pt-4">
          <BottomWarning 
            label={"Don't have an account?"} 
            buttonText={"Sign up"} 
            to={"/signup"} 
            className="text-sm text-gray-600" 
          />
        </div>
      </div>
    </div>
  )
}

export default Signin

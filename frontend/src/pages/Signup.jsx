import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className='bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-full max-w-md p-8 bg-white rounded-xl shadow-xl'>
        <Heading label={"Sign up"} className="text-2xl font-bold text-gray-800" />
        <SubHeading label={"Enter your information to create an account"} className="text-sm text-gray-600 mb-6" />
        <InputBox 
          onChange={e => setFirstName(e.target.value)} 
          label={"First Name"} 
          placeholder={"Jimmy"} 
          className="mb-4" 
        />
        <InputBox 
          onChange={e => setLastName(e.target.value)} 
          label={"Last Name"} 
          placeholder={"Smith"} 
          className="mb-4" 
        />
        <InputBox 
          onChange={e => setUserName(e.target.value)} 
          placeholder={"xyz@gmail.com"} 
          label={"Email"} 
          className="mb-4" 
        />
        <InputBox 
          onChange={e => setPassword(e.target.value)} 
          label={"Password"} 
          placeholder={"1231234"} 
          className="mb-6" 
        />
        <div className='pt-5'>
        <Button 
          onClick={async () => {
            const response = await axios.post('https://minipayb.onrender.com/api/v1/user/signup', {
              username,
              firstName,
              lastName,
              password
            });
            console.log(response);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          }} 
          label={"Sign up"} 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200" 
        />
        </div>
        <div className='pt-4'>
          <BottomWarning 
            label={"Already have an account?"} 
            buttonText={"Sign in"} 
            to={"/signin"} 
            className="text-sm text-gray-600" 
          />
        </div>
      </div>
    </div>
  )
}

export default Signup

import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Signup = () => {
  const [firstName,setFirstName] =useState('');
  const [lastName,setLastName] =useState('');
  const [username,setUserName] =useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e=>{
                    setFirstName(e.target.value);
                }} label={"First Name"} placeholder={"Jimmy"} />
                <InputBox onChange={e=>{
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Smith"} />
                <InputBox onChange={e=>{
                    setUserName(e.target.value);
                }} placeholder={"xyz@gmail.com"} label={"Email"} />
                <InputBox onChange={e=>{
                    setPassword(e.target.value);
                }} label={"Password"} placeholder={"1231234"} />
                <div className='pt-4'>
                    <Button onClick={async ()=>{
                        const response =await axios.post('https://minipayb.onrender.com/api/v1/user/signup',{
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        console.log(response);
                        localStorage.setItem("token",response.data.token);
                        navigate("/dashboard");
                    }} label={"Sign up"} className="w-full" />
                </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
  )
}

export default Signup
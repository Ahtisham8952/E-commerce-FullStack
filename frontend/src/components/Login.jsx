import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  { useDisplayUser } from "../context/UserContextProvider";

const Login = () => {
 const [email,setEmail]=useState('')
 const [password,setPassowrd]=useState('')
const navigator=useNavigate()
const {setUser}=useDisplayUser()
const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
    const response = await axios.post('/api/users/login',{email,password})
    const data = response.data;
    console.log(data);
    setUser(data.data.user)
    console.log(data.data.user)
    navigator("/profile")
    
  } catch (error) {
    console.log(error)
    
  }
}

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassowrd(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
     
    </div>
  );
};

export default Login;

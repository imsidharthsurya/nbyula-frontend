import React,{useState} from 'react'
import axios from "axios";

const TerraformersLogin = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div>
      Enter Your Email: <input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='email' className='border border-black p-1 rounded-lg w-72'/><br/><br/>
      Enter Your Password: <input onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='password' className='border border-black p-1 rounded-lg w-72'/><br/><br/>
      <button onClick={()=>{
        console.log(email);
        console.log(password);
      }} className='border border-black bg-green-400 p-2 rounded-lg text-white'>Login</button>
    </div>
  )
}

export default TerraformersLogin
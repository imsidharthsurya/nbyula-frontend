import React,{useState} from 'react'
import axios from "axios";

const ApplicantsSignup = () => {
    const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div>
      Enter Your Email: <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='email' className='border border-black p-1 rounded-lg w-72'/><br/><br/>
      Enter Your Password: <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='password' className='border border-black p-1 rounded-lg w-72'/><br/><br/>
      <button onClick={()=>{
        // console.log(email);
        // console.log(password);
        const reqBody={
          email,
          password
      };
      axios.post("http://localhost:8080/applicantSignup",reqBody).then((res)=>{
          console.log("applicants created success");
      }).catch((err)=>{
        console.log("applicants created failure");
      })
      }} className='border border-black bg-green-400 p-2 rounded-lg text-white'>Signup</button>
    </div>
  )
}

export default ApplicantsSignup
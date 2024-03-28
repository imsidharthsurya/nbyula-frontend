import React,{useState} from 'react'
import axios from "axios";

const JobPost = () => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [deadline,setDeadline]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [email,setEmail]=useState("");
    const [location,setLocation]=useState("");
  return (
    <div className='ml-10'>
        <input type='text' onChange={(e)=>{
            setTitle(e.target.value)
        }} className='border border-black p-1' placeholder='title' value={title}/><br/><br/>
        <input type='text' onChange={(e)=>{
            setDesc(e.target.value)
        }} className='border border-black p-1' placeholder='desc' value={desc}/><br/><br/>
        <input type='text' onChange={(e)=>{
            setLocation(e.target.value)
        }} className='border border-black p-1' placeholder='location' value={location}/><br/><br/>
        <input type='date' onChange={(e)=>{
            setDeadline(e.target.value)
        }} className='border border-black p-1' placeholder='deadline' value={deadline}/><br/><br/>
        <input type='tel' onChange={(e)=>{
            setPhoneNumber(e.target.value)
        }} className='border border-black p-1' placeholder='Phone Number' value={phoneNumber}/><br/><br/>
        <input type='email' onChange={(e)=>{
            setEmail(e.target.value)
        }} className='border border-black p-1' placeholder='email' value={email}/><br/><br/>
<button className='border border-black p-2' onClick={()=>{
    // console.log(email);
    // console.log(title);
    // console.log(desc);
    // console.log(phoneNumber);
    // console.log(deadline);
    const reqBody={
        email,
        title,
        desc,
        phoneNumber,
        deadline,
        location
    };
    axios.post("http://localhost:8080/jobpost",reqBody).then((res)=>{
        console.log("job created success");
    }).catch((err)=>{
        console.log("job not created")
    })
}}>Post Job</button>
    </div>
  )
}

export default JobPost
import React,{useState,useEffect} from 'react'
import axios from "axios";

const AllJobs = () => {

    const [allJobs,setAllJobs]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/alljobs").then((res)=>{
            setAllJobs(res.data);
            console.log(JSON.stringify(res.data))
        })
    },[])
  return (
    <div>
        <h1>All Jobs</h1>
        {
            allJobs.map((job)=>{
                return <div className='border border-black'>
                        <h1>{job.title}</h1>
                        <h1>{job.description}</h1>
                        <h1>{job.location}</h1>
                        <h1>{job.deadline}</h1>
                        <h1>{job.phonenumber}</h1>
                        <h1>{job.email}</h1>
                        
                    </div>
            })
        }
    </div>
  )
}

export default AllJobs
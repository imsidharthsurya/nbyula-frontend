import React from 'react'
import {Outlet,Link} from "react-router-dom"

const Layout = () => {
  return (
    <div>

        <Link className='m-10' to="/applicantsLogin">Applicants Login</Link>
        <Link className='m-10' to="/applicantsSignup">Applicants Signup</Link>
        <Link className='m-10' to="/terraformersLogin">Terraformers Login</Link>
        <Link className='m-10' to="/terraformersSignup">Terraformers Signup</Link>
        <Link className='m-10' to="/jobpost">job post</Link>
        <Link className='m-10' to="/alljobs">all jobs</Link>
        <Outlet/>
    </div>
  )
}

export default Layout
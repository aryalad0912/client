import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className='bg-pink-400 w-full h-screen flex flex-col items-center justify-center uppercase text-white'>
        <h1 className='py-4 text-2xl font-extrabold'>Welcome To Dashboard</h1>

        <p>Please go to login page</p>
        <Link to = "/Register">LOGIN</Link>
            
           
    </div>
  )
}

export default Dashboard;
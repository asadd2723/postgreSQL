import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='h-screen bg-[#009578]'>
      <div className='py-6 px-12 flex justify-between bg-gray-50 items-center'>
        <Link className='pl-4 text-3xl text-[#009578] font-semibold ' to='/'>Pk Programmer</Link>
        <div className='flex gap-10 pr-4'>
          <Link className='bg-[#009578] rounded-md text-white px-6 py-2' to="/login">Login</Link>
          <Link className='bg-[#009578] rounded-md text-white px-6 py-2' to="/signup">SignUp</Link>
        </div>
          
      </div>
    </div>
  )
}

export default Home
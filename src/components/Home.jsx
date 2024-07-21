import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    
      <div className='py-8 px-5 md:px-12 flex justify-between bg-gray-50 items-center'>
        <Link className=' text-xl text-[#009578] font-semibold ' to='/'>Pk Programmer</Link>
        <div className='flex gap-2 md:gap-4 items-center'>
          <Link className='bg-[#009578] rounded-md text-white px-3 py-1' to="/login">Login</Link>
          <Link className='bg-[#009578]  rounded-md text-white px-3 py-1' to="/signup">SignUp</Link>
        </div>
          
      </div>

  )
}

export default Home
import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function SignUp() {
  const [signIn, setSignIn] = useState(false)
  const [error, setError] = useState(null)

  const handleSignUp = async (e)=>{
    e.preventDefault()
    const form = e.target
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    }
    console.log(formData)
    try {
      await fetch('/api/add-table',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.message){
          return setSignIn({true:true,data: data.data})
        }else{
          setError(data.error)
        }
      })
    } catch (error) {
      console.log("Error:", error)
    }
  }

  if(signIn.true){
    return <p className='text-4xl text-red-800'>Welcome to {signIn.data}</p>
  }
  
  return (
      <div className='w-full bg-opacity-100  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-10'>

        <div className='flex w-[89%] sm:w-[440px]   flex-col gap-2 transition-all duration-500 text-white'>
        <Link to='/' className='px-2 pr-3 py-1 place-self-start flex items-center justify-center rounded-md font-medium text-lg  hover:underline bg-white text-[#009578]'><FaAngleLeft  size={24}  />Home</Link>
          <div className='bg-[#FFFFFF] rounded-md px-6 py-5 md:py-10 md:px-[28px] text-center'>
            <h1 className='text-xl text-black md:text-3xl font-semibold mb-10 font-body'>SignUp</h1>
            <form onSubmit={handleSignUp} className='flex items-center flex-col' method='POST'>
            <input className=' input placeholder:text-gray-300' type="text" placeholder='Enter your name' name='name' required/>
              <input type="email" placeholder='Enter your Email' className='input placeholder:text-gray-300 mt-7' name='email' />
              <input type="password" placeholder='Enter your Password' className='input placeholder:text-gray-300 mt-7' name='password' />
              {/* <h2 className='text-lg text-red-800 mt-3 mb-[-18px] underline'>{""}</h2> */}
              <button className='bg-[#009578] mt-9 w-full py-3 rounded-md text-xl font-medium tracking-wide '>SignUp</button>
              <h2 className='text-gray-800  pt-4 font-medium'>Already have an account? <Link to='/login' className='text-[#009578] font-semibold hover:underline'>Login</Link></h2>
            </form>
      {/* <p className='text-red-700 text-2xl'>{error}</p> */}
          </div>
        </div>
      </div>
    
  )
}

export default SignUp
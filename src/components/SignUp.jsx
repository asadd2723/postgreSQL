import React, { useState } from 'react'
import { MdCancel } from 'react-icons/md'

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
    <>
      <div className='w-full bg-opacity-100  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-10'>

        <div className='flex lg:w-[28%]  flex-col gap-2 transition-all duration-500 text-white'>
          <button className=' rounded-full place-self-end'><MdCancel size={35}  /></button>
          <div className='bg-[#FFFFFF] rounded-md pt-8 px-6 md:py-10 md:px-[28px] text-center'>
            <h1 className='text-xl text-black md:text-3xl font-semibold mb-10 font-body'>SignUp</h1>
            <form onSubmit={handleSignUp} className='flex items-center flex-col' method='POST'>
            <input className=' input placeholder:text-gray-300' type="text" placeholder='Enter your name' name='name' required/>
              <input type="email" placeholder='Enter your Email' className='input placeholder:text-gray-300 mt-7' name='email' />
              <input type="password" placeholder='Enter your Password' className='input placeholder:text-gray-300 mt-7' name='password' />
              {/* <h2 className='text-lg text-red-800 mt-3 mb-[-18px] underline'>{""}</h2> */}
              <button className='bg-[#009578] mt-9 w-full py-3 rounded-md text-xl font-medium tracking-wide '>SignUp</button>
              <h2 className='text-gray-800  pt-4 font-medium'>Already have an account? <span className='text-[#009578] font-semibold hover:underline'>Login</span></h2>
            </form>
      {/* <p className='text-red-700 text-2xl'>{error}</p> */}
          </div>
        </div>
      </div>
      <form name='contact-us' onSubmit={handleSignUp} className='p-8 space-y-8 w-full max-w-[450px]' method='POST' >
          <input className='rounded-lg input' type="text" placeholder='Enter your name' 
      name='name' required/>
          <input className='rounded-lg input' type="email" placeholder='Enter your email' 
        name='email' required/>
        <input type="password" className="input rounded-lg" placeholder='Enter your Password' name='password' required/>
        <button type='submit' className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover'>Send Message</button>
      </form>
      <p className='text-2xl text-red-950'>{error}</p>
    </>
  )
}

export default SignUp
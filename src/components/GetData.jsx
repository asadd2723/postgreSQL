import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function GetData() {
  const [login, setLogin] = useState(false)
  const [error, setError] = useState('')

  console.log(login)
  const loginHandle = async (e)=>{
    e.preventDefault()
    const form = e.target
    const formData ={
      email:form.email.value,
      password:form.password.value
    }
    try {
      await fetch('/api/get-table',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.message){
          return setLogin({true:true,data:data.user})
        }else{
          console.log(data.error)
          setError(data.error)
        }
      })
    } catch (error) {
      console.log("Error: ",error)
    }
  }
  if(login.true){
    return <div className='w-full h-screen bg-[#009578]'>
      <h1 className='text-4xl text-gray-950'>welcome, {login.data.name}</h1>
      <h1 className='text-2xl text-gray-950'>{login.data.email}</h1>
    </div>
  }
  return (
    <div className='w-full bg-opacity-100  inset-0 backdrop-blur-sm flex justify-center items-center fixed z-10'>

      <div className='flex lg:w-[28%]  flex-col gap-2 transition-all duration-500 text-white'>
      <Link to='/' className='px-2 pr-3 py-1 place-self-start flex items-center justify-center rounded-md font-medium text-lg  hover:underline bg-white text-[#009578]'><FaAngleLeft  size={24}  />Home</Link>
      <div className='bg-[#FFFFFF] rounded-md pt-8 px-6 md:py-10 md:px-[28px] text-center'>
        <h1 className='text-xl text-black md:text-3xl font-semibold mb-10 font-body'>Login</h1>
        <form onSubmit={loginHandle} className='flex items-center flex-col' method='POST'>
          <input type="email" placeholder='Enter your Email' className='input placeholder:text-gray-300' name='email' required/>
          <input type="password" placeholder='Enter your Password' className='input placeholder:text-gray-300 mt-8' name='password' required/>
          <h2 className='text-lg text-red-800 mt-3 underline'>{error}</h2>
          <h2 className='mr-auto font-medium text-[#009578] mt-4 hover:underline'>Forgot Password?</h2>
          <button className='bg-[#009578] mt-4 w-full py-3 rounded-md text-xl font-medium tracking-wide '>Login</button>
          <h2 className='text-gray-700 mt-4 font-medium'>Don't have an account? <Link to='/signup' className='text-[#009578] font-semibold hover:underline'>SignUp</Link></h2>
        </form>
      {/* <p className='text-red-700 text-2xl'>{error}</p> */}
    </div>
    </div>
    </div>
  )
}

export default GetData
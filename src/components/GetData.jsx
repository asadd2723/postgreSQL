import React, { useEffect, useState } from 'react'

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
    return <div className='text-gray-950'>
      <h1 className='text-4xl'>welcome, {login.data.name}</h1>
      <h1 className='text-2xl'>{login.data.email}</h1>
    </div>
  }
  return (
    <>
      <form onSubmit={loginHandle} className='max-w-[400px] flex items-center flex-col gap-3'>
        <input type="email" placeholder='Enter your Email' className='input rounded-lg' name='email' />
        <input type="password" placeholder='Enter your Password' className='input rounded-lg' name='password' />
        <button className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover w-40'>Login</button>
      </form>
      <p>{error}</p>
    </>
  )
}

export default GetData
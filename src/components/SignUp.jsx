import React from 'react'

function SignUp() {

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
        if (data.message === 'Data added successfully') {
          console.log(data.message);
          // Handle success (e.g., display a success message on the webpage)
        } else {
          console.error(data.message);
          // Handle error (e.g., display an error message on the webpage)
        }
      })
    } catch (error) {
      console.log("Error:", error)
    }
  }
  return (
    <>
      <form name='contact-us' onSubmit={handleSignUp} className='p-8 space-y-8 w-full max-w-[450px]' method='POST' >
          <input className='rounded-lg input' type="text" placeholder='Enter your name' 
      name='name' required/>
          <input className='rounded-lg input' type="email" placeholder='Enter your email' 
        name='email' required/>
        <input type="password" className="input rounded-lg" placeholder='Enter your Password' name='password' required/>
        <button type='submit' className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover'>Send Message</button>
      </form>
    </>
  )
}

export default SignUp
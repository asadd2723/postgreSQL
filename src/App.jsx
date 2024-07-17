import { useState } from 'react'


function App() {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }
    console.log(formData)
    await fetch('/api/add-table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(()=>console.log("submitted"))
    .then((error)=>error)
  };

  return (
    <>
      <form name='contact-us' onSubmit={handleSubmit} className='space-y-8 w-full max-w-[780px]' method='POST' >
            <input type="hidden" name="form-name" value="contact-us" />
            <div className='flex gap-8'>
              <input className='rounded-lg input' type="text" placeholder='Enter your name' 
          name='name' required/>
              <input className='rounded-lg input' type="email" placeholder='Enter your email' 
           name='email' required/>
            </div>
            <textarea className='rounded-lg textarea' placeholder='Enter your Message' name='message' required></textarea>
            <button type='submit' className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover'>Send Message</button>
          </form>
    </>
  )
}

export default App

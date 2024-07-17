import { useState } from 'react'


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <>
      <form name='contact-us' onSubmit={handleSubmit} className='space-y-8 w-full max-w-[780px]' method='POST' >
            <input type="hidden" name="form-name" value="contact-us" />
            <div className='flex gap-8'>
              <input className='rounded-lg input' type="text" placeholder='Enter your name' value={formData.name}
          onChange={handleChange} name='Name' required/>
              <input className='rounded-lg input' type="email" placeholder='Enter your email' value={formData.email}
          onChange={handleChange} name='Email' required/>
            </div>
            <textarea className='rounded-lg textarea' placeholder='Enter your Message' name='Message' value={formData.message}
          onChange={handleChange} required></textarea>
            <button type='submit' className='rounded-lg btn btn-lg bg-accent hover:bg-accent-hover'>Send Message</button>
          </form>
    </>
  )
}

export default App

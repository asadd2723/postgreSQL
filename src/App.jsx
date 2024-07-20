import { Link, Outlet } from 'react-router-dom';
import Home from './components/Home';


function App() {


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target
  //   const formData = {
  //     name: form.name.value,
  //     email: form.email.value,
  //     message: form.message.value
  //   }
  //   console.log(formData)
  //   await fetch('/api/add-table', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(formData)
  //   })
  //   .then(()=>console.log("submitted"))
  //   .then((error)=>error)
  // };

  return (
    <>
      <Home />
      <Outlet/>
    </>
  )
}

export default App

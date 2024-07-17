import React, { useEffect } from 'react'

function GetData() {

  useEffect(()=>{
    fetch('/api/get-table')
    .then((res)=>res.json())
    .then((data)=>console.log(data.rows))
  },[])
  return (
    <div>GetData</div>
  )
}

export default GetData
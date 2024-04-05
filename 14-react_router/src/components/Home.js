import React from 'react'
import {useNavigate}  from 'react-router-dom'

function Home() {
    const navigate=useNavigate();//kutuphanedeki fonksiyon lokalize edildi. 
  return (
    <>
    <div> Home </div>
    <button onClick={()=>navigate('/mission')}>Mission a Git</button>
    {/* Bu sekilde de yonlendirme islemini yapabiliriz. */}
    </>
  )
}

export default Home
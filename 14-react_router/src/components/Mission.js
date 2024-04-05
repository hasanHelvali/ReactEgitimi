import React from 'react'
import {useNavigate} from 'react-router-dom'

function Mission() {
    const navigate=useNavigate();
  return (
    <>
    <div>Mission</div>
    <button onClick={()=>navigate('/')}>Geriye Dön</button>
    {/* <button onClick={()=>navigate(-1)}>Geriye Dön</button> */}
    {/* navigate e -1 degeri verilirse bir onceki yola geri donulur. */}
    </>
  )
}

export default Mission
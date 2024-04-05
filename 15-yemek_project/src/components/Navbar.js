import React from 'react'
import DukkanLogo  from '../../src/assets/logo.jpeg'
import {NavLink} from 'react-router-dom'
import '../styles/navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={DukkanLogo} alt="" />
        </div>
        <div className='mainLink'>
            <NavLink to={"/"} >AnaSayfa</NavLink>
            <NavLink to={"/menu"} >Menü</NavLink>
            <NavLink to={"/about"} >Hakkımızda</NavLink>
            <NavLink to={"/contact"} >İletisim</NavLink>
        </div>
    </div>
  )
}

export default Navbar
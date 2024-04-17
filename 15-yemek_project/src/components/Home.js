import React from 'react'
import {Link} from 'react-router-dom'
import Guvec from '../assets/guvec.jpeg'
import '../styles/Home.css' 
function Home() {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${Guvec})`}}>
        <div className='order'>
            <Link to={'/menu'}/>
            <button>Siparis Ver</button>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
function Navbar() {
    const {quantity}=useSelector((store)=>store.card)
  return (
    <nav>
        <div className='navbar'>
            <h3>Kurs Uygulaması</h3>
            <div className='navDiv'>
                <div className='itemsDiv'>
                    <p>{quantity}</p>
                </div>
                <FaBasketShopping className='itemsIcon'></FaBasketShopping>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
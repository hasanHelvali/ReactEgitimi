import React from 'react'

export const MenuItem = ({menuItem}) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${menuItem.image})`}}> </div>
        <h1 style={{marginBottom:'10px'}}>{menuItem.name}</h1>
        <h6 style={{marginTop:'0px'}}>{menuItem.content}</h6>
        <p>
            <i style={{color:'red'}}>
                {menuItem.price} ₺ 
            </i>
        </p>
    </div>
  )
}


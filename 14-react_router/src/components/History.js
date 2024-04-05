import React from 'react'
import {Link, NavLink,Outlet} from 'react-router-dom'

function History() {
  return (
    <>
    <div>History</div>
    {/* Burada da nested route kullandık. */}
    <nav className='historyNav'>
        <NavLink to={"company"}>Our Companies</NavLink> <br/>
        <NavLink to={"team"}>Team</NavLink>
    </nav>

    <Outlet></Outlet>
    {/* Buradalki outlet konulmazsa nested component leirn icerikleri goruntuye aktarılmıyor. */}
    </>
  )
}

export default History
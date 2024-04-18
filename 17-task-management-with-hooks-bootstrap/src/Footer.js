import React from 'react'

function Footer() {
    const date=new Date();
    return (
        <footer>
            <p>Copyright {date.getFullYear()} | HHS</p>
        </footer>
  )
}

export default Footer
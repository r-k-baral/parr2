import React from 'react'
import logi from './assets/logi.png'
import "./Applayout.css"

const Applayout = () => {
  return (
    <div >
      <nav  className='par-nav'>
        <img src={logi} alt="" className='logo' />
        <ul className='navlist'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Service</li>
            <li className='nav-item'>Cart</li>
        </ul>
      </nav>
    </div>
  )
}

export default Applayout

import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link className='side' to="/">HOME</Link>
        <Link className='side' to="/Products">PRODUCT</Link>
        <Link className='side' to="/Login">LOGIN</Link>
        <Link className='side' to="/Signup">SIGNUP</Link>

    </div>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/">HOME</Link>
        <Link to="/Product">PRODUCT</Link>
        <Link to="/Login">LOGIN</Link>
        <Link to="/Signup">SIGNUP</Link>

    </div>
  )
}

export default Nav

import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-wrapper" >
        <div className="header-logo" >Mesob <span>Menu</span></div>
        <nav>
            <Link to="/Menu" >Menu</Link>
            <Link to="/Menu" >Featured<span>Dish</span></Link>
            <Link to="/Cart" >Order &<span>Cart</span></Link>
            <Link to="/Checkout" >Delivery &<span>checkout</span></Link>
            <Link to="/NotFound" >1040</Link>
            <Link to="/signIn" > Sign <span>In</span> </Link>
            <Link to="/Menu" >Register</Link>
        </nav>
        

    </div>
  )
}

export default Header
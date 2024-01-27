// import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="container">
        <h1>
        <Link style={{color:"white", textDecoration:"none"}} to={"/"}>KALVIUM❤️</Link>
        </h1>
        <div className="nav">

        <Link style={{color:"white", textDecoration:"none"}} to={"/contact"}>Contact</Link>
        <Link style={{color:"white", textDecoration:"none"}} to={"/about"}>About</Link>
        </div>
    </div>
  )
}

export default Navbar
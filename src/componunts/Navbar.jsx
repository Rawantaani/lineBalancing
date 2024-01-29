
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

  return (

    <nav className="navbar">
      <Link to="/" className="logo">
        LBS
      </Link>

      <div className="nav-links">
        <ul className="horizontal-list">

          <li><Link to={"/"}>Home</Link></li>
         
          <li> <Link to={"/team"}>Team</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          

         

        </ul>


      </div>
    </nav>


  )
}

export default Navbar
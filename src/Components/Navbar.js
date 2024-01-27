import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
<nav>
   <ul>
<li><NavLink  to="/">Home </NavLink></li>
    <NavLink to="/Login"> Login</NavLink>

 <li><NavLink to="/Dealer">Dealer</NavLink></li> 
   </ul>
    
    

</nav>
      

  )
}

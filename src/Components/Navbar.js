import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
<nav>
   <ul>
<li><NavLink  to="/">Home </NavLink></li>
    <NavLink to="/Login"> Login</NavLink>

    <li><NavLink to="/VisitInfo">VisitInfo</NavLink></li> 
 <li><NavLink to="/Dealer">Dealer</NavLink></li> 
 <li><NavLink to="/Plan">Plan</NavLink></li> 

   </ul>
    
    

</nav>
      

  )
}

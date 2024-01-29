import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
<nav>
 
<NavLink  to="/">  Home   </NavLink> 

    <NavLink to="/Login"> Login </NavLink> 

    <NavLink to="/Employee">   Employee  </NavLink>

    <NavLink to="/VisitInfo">  VisitInfo  </NavLink>
 <NavLink to="/Dealer">  Dealer  </NavLink>
 <NavLink to="/Plan">  Plan  </NavLink>

  
    
    

</nav>
      

  )
}

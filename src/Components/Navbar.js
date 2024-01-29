import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
<nav>
 
<NavLink  to="/Home">Home </NavLink>
<br/>
    {/* <NavLink to="/Login"> Login</NavLink>  */}
    <NavLink to="/Plan">Plan</NavLink>
    <br/>
 <NavLink to="/Task">Task</NavLink>
 <br/>
 <NavLink to="/Dealer">Dealer</NavLink>
 <br/>
    <NavLink to="/Employee">Employee</NavLink>
    <br/>
    
 
 <NavLink to="/VisitInfo">VisitInfo</NavLink>
 

  
    
    

</nav>
      

  )
}

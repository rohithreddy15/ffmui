import React,{ useState } from "react"
import './navbar.css'
// import useHistory from 'react'
import { useLocation } from "react-router-dom";
export default function NavbarLoggedIn({ onLogout }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const location = useLocation();
 
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/plan">Plan</a>
          </li>
          <li>
            <a href="/task">Task</a>
          </li>
          <li>
            <a href="/dealer">Dealer</a>
          </li>
          <li>
            <a href="/employee">Employee</a>
          </li>
          <li>
            <a href="/visitinfo">VisitInfo</a>
          </li>
          <li>
            <a href="/getReimbursement">getReimbursement</a>
          </li>
          <li>
            <a href="/" onClick={onLogout}>Logout</a>
          </li>
      </div>
    </nav>
  );
}
import React, { useEffect, useState } from 'react';
import { HiMenuAlt2, HiUserCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';
import "./NavigationBar.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

function NavigationBar() {

    const [showMenu, setShowMenu] = useState(false)
    const [displayName, setDisplayName] = useState("")

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }
    const hideMenu = () => {
      setShowMenu(false)
    }

    const logo = (
        <div className="logo">
      <p className="logo-text">Expenses Manager</p>
    </div>
    );

    const activeLink = ({isActive}) => (isActive ? "active" : "");
    const navigate = useNavigate();

    const logoutUser = () => {
      signOut(auth).then(() => {
       toast.success("Logot successful");
       navigate("/login");
      }).catch((error) => {
       toast.error(error.message)
      });
    };


    // MONITOR CURRENTLY SIGNED IN USER
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(user.displayName);
          setDisplayName(user.displayName)
         
        } else {
          setDisplayName("")
        }
      });
      
    }, [])
    

  return (
    <>

    <nav className="container navbar">
        {logo}

    <menu>
      <ul className="nav-links fixed" id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
        
        <li className="user-icon"  onClick={hideMenu}>
          <HiUserCircle color="white" size={25} />
          <span>Hi, {displayName}</span>
        </li>

        <li onClick={hideMenu}>
          <NavLink to="/login" className={activeLink}>Login</NavLink>
        </li>
        
        <li onClick={hideMenu}>
          <NavLink to ="/addExpense" className="btn-orange">Add Expense</NavLink>
        </li>
        <li onClick={hideMenu}>
          <NavLink to="/register" className={activeLink}>Register</NavLink>
        </li>
        <li onClick={hideMenu}>
          <NavLink to="/login" onClick={logoutUser}>Logout</NavLink>
        </li>
      </ul>
    </menu>

    <div className="menu-icons" onClick={toggleMenu}>
      {showMenu ? (
        <RxCross1 color="white" size={23} />
      ) : (
        <HiMenuAlt2 color="white" size={23} />
      )}
      
    </div>
  </nav>
  </>
  )
}

export default NavigationBar
import React, { useEffect, useState } from "react";
import { HiMenuAlt2, HiUserCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch, useSelector, } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
  selectIsLoggedIn,
  
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogedOut } from "../hiddenLink/HiddenLinks";


function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };


  const dispatch = useDispatch();
  const protectedRoute = useSelector( selectIsLoggedIn);

  const logo = (
    <div className="logo">
      <p className="logo-text">Expenses Manager</p>
    </div>
  );

  const activeLink = ({ isActive }) => (isActive ? "active" : "");
  const navigate = useNavigate();
    
  
 

  // LOG A USER OUT
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logot successful");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // MONITOR CURRENTLY SIGNED IN USER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log(user.displayName);

        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  return (
    <>
      <nav className="container navbar">
        {logo}

        <menu>
          <ul
            className="nav-links fixed"
            id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}
          >
            <ShowOnLogin>
            <li className="user-icon" onClick={hideMenu}>
              <HiUserCircle color="white" size={25} />
              <span>Hi, {displayName}</span>
            </li>
            </ShowOnLogin>

            <li onClick={hideMenu}>
              <ShowOnLogedOut>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              </ShowOnLogedOut>
            </li>

            <li onClick={ hideMenu}>
                <NavLink to={ protectedRoute ? "/addExpense" : "/login"} className="btn-orange">
                Add Expense
              </NavLink>
            </li>
            <li onClick={ hideMenu}>
                <NavLink to="/">
                Home
              </NavLink>
            </li>
            
            <li onClick={hideMenu}>
              <ShowOnLogin>
              <NavLink to="/login" onClick={logoutUser}>
                Logout
              </NavLink>
              </ShowOnLogin>
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
  );
}

export default NavigationBar;

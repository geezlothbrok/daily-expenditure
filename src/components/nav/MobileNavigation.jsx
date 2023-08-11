import React, { useEffect } from 'react';
import './MobileNavigation.css';
import {MdOutlineAccountBalanceWallet} from "react-icons/md"
import {VscAccount} from "react-icons/vsc"
import {IoMdAdd} from "react-icons/io"
import {PiChartLineUp} from "react-icons/pi"
import {RiHome4Line} from "react-icons/ri"
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/slice/authSlice';

function MobileNavigation() {

  const protectedMobileNav = useSelector( selectIsLoggedIn);
  
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (

    
    
      <div className={protectedMobileNav ? "bottomMenu" : ""}>
        
          <ul id='menu'>
            <li>
              <a href="#home"><span className='icon'> <RiHome4Line /></span></a>
            </li>
            <li>
            <a href="#history"><span className='icon'><PiChartLineUp /></span> </a>
            </li>
            <li>
            <a href="#add"><span className='icon'><IoMdAdd/></span> </a>
            </li>
            <li>
            <a href="#balance"><span className='icon'><MdOutlineAccountBalanceWallet /></span></a>
            </li>
            <li>
           <a href="#account"><span className='icon'><VscAccount /> </span> </a>
            </li>
            <div className="indicator"></div>
          </ul>
        
      </div>
    
  )
}

export default MobileNavigation
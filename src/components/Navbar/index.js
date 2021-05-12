import { React, useState } from 'react';
import Logo from '../../images/logo.svg';
import Union from '../../images/Union.svg';
import Mail from '../../images/mail.svg';
import Shuffle from '../../images/shuffle.svg';
import DrawerIcon from '../../images/text_align_right.svg';

import './styles.css'

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="brand" width="100%" height="100%" />
      <ul className={open ? "show" : ""}>
        <li className="nav-link"><a href="#services">Services</a></li>
        <li className="nav-link">Product</li>
        <li className="nav-link">Technology</li>
        <li className="nav-link"><a href="#welcome">About</a></li>
        <li className="nav-link">Client</li>
        <li className="nav-link">Partner</li>
        <li className="nav-link nav-icons-wrap">
          <div className="nav-icons">
            <img src={Union} alt="home" width="100%" height="100%" />
            <img src={Mail} alt="mail" width="100%" height="100%" />
            <img src={Shuffle} alt="shuffle" width="100%" height="100%" />
          </div>
        </li>
      </ul>
      <img
        src={DrawerIcon}
        alt="drawer-icon"
        className="drawer"
        onClick={() => setOpen(!open)}
      />
    </nav>
  );
}

export default Navbar;
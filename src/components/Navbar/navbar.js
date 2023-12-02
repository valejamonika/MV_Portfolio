import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import contactimg from '../../assets/contact.png'
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">

      <img src={logo} alt="logo" className='logo' />

      <div className="desktopmenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={200} className="desktopmenuitemlist">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} className="desktopmenuitemlist">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={200} className="desktopmenuitemlist">Portfolio</Link>
        {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={200} className="desktopmenuitemlist">Clients</Link> */}
      </div>

      <button className="desktopmenubtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactimg} alt="" className="dektopmenuimg" />Contact Me
      </button>
      <img src={menu} alt="Menu" className='mobmenu' onClick={() => setShowMenu(!showMenu)} />

      <div className="navmenu" style={{ display: showMenu ? 'flex' : 'none' }}>

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={200} className="listitem" onClick={() => setShowMenu(!false)}> Home </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} className="listitem" onClick={() => setShowMenu(!false)}> About </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={200} className="listitem" onClick={() => setShowMenu(!false)}> Portfolio </Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={200} className="listitem" onClick={() => setShowMenu(!false)}> Clients </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={200} className="listitem" onClick={() => setShowMenu(!false)}> Contact </Link>
        
      </div>

    </nav>
  )
}

export default Navbar
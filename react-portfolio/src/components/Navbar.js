// import React, { useState } from 'react';
// // react-router-dom only needed to import links? keeping here until I decide what to do
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { Button } from './Button';
// import './Navbar.css';


// function Navbar() {
//   // set state now (importing {useState} from above). change it from what it was to what we want
//   const [click, setClick] = useState(false);

//   const [button, setButton] = useState(true);

//   // sets the click and then reverse the false useState
//   const handleClick = () => setClick(!click);

//   const closeMobileMenu = () => setClick(false);

//   //function that removes button on mobile and displays it approproatly depending on screens size
//   const showButton = () => {
//     if(window.innerWidth <= 960) {
//         setButton(false);
//     } else {
//         setButton(true);
//     }
//   };

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//             {/* the site icon image. can be link or image. worry about later */}
//             <Link to="/" className="navbar-logo">
//                 AM
//             </Link>
//             <div className='menu-icon' onClick={handleClick}>
//                 {/* if the hamburger icon is clicked, it turns into an 'x'...*/}
//                 <FontAwesomeIcon icon={click ? faTimes : faBars} />
//             </div>
//             {/* mostly for mobile view, clicking on the link closes the menu and goes to the page */}
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//               <li className='nav-item'>
//                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                     Home
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
//                     About
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
//                     Projects
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link to='/work' className='nav-links' onClick={closeMobileMenu}>
//                     Work Together
//                 </Link>
//               </li>
//               {/* this will need to change to handle downloading a file...? or maybe it's under the work together or projects */}
//               <li className='nav-item'>
//                 <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
//                     Resume
//                 </Link>
//               </li>
//               {/* not sure I need this but keeping it anyway for now... introduced at 23:45 */}
//               <li className='nav-item'>
//                 <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
//                     Sign Up
//                 </Link>
//               </li>
//             </ul>
//             {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
//         </div>
//       </nav>  
//     </>
//   )
// }

// export default Navbar

// Navbar.js
import React, { useState } from 'react';
import './styles/Navbar.css';
// We'll define styles in a separate CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="navbar-brand">Alex Mostaghni</div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#collaborate">Collaborate</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#email">Email</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
